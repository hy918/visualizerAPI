/* eslint-disable */

import axios from 'axios';
import _ from 'lodash';
import { message } from 'antd';
import paramsToQueryString from './paramsToQueryString.js';
import { myLocalRedis } from '@/utils/cache';

// 请求列表
const requestList = [];

// 取消列表
const { CancelToken } = axios;

const sources = {};

const service = axios.create({
	baseURL: '/api',
	timeout: 60 * 1000, // 超时取消请求
});

// 请求拦截处理
service.interceptors.request.use(
	(config) => {
		const request =
			JSON.stringify(config.url) + JSON.stringify(config.data);

		config.cancelToken = new CancelToken((cancel) => {
			sources[request] = cancel;
		});

		// 请求处理;
		if (requestList.includes(request)) {
			// 重复
			sources[request]('取消重复请求');
		} else {
			// 不重复
			requestList.push(request);
		}

		config.headers['Content-Type'] = 'application/json; charset=utf-8';
		config.headers.password = myLocalRedis.getWithTTL('password');
		config.headers.username = myLocalRedis.getWithTTL('username');

		// 上传文件配置，必传 type：file
		if (config?.data?.type === 'file') {
			config.headers['Content-Type'] = 'multipart/form-data';
			const formData = new FormData();
			const { type, ...elseData } = config.data;
			for (let key in elseData) {
				if (elseData.hasOwnProperty(key)) {
					const item = elseData[key];
					if (key === 'file' && Array.isArray(item)) {
						_.forEach(elseData[key], (d) =>
							formData.append('file', d)
						);
					} else {
						formData.append(key, item);
					}
				}
			}
			config.data = formData;
		}

		return config;
	},
	(error) => {
		// 异常处理
		return Promise.reject(error);
	}
);

// 响应拦截处理
service.interceptors.response.use(
	(response) => {
		const request =
			JSON.stringify(response.config.url) +
			JSON.stringify(response.config.data);
		// 获取响应后，请求列表里面去除这个值
		requestList.splice(
			requestList.findIndex((item) => item === request),
			1
		);
		if (response.data.code !== 10200) {
			message.error(response.data.msg);
		}
		return response;
	},
	(error) => {
		// 取消请求
		if (axios.isCancel(error)) {
			requestList.length = 0;

			return {
				Code: -200,
				message: '取消请求',
				cause: '取消请求',
			};
		}

		if (error.message.includes('timeout')) {
			message.error('请求超时');

			return error;
		}

		const { status, data: { Code, ErrorCode, code } = {} } = error.response;

		if (status === 500 || status === 403) {
			message.error(error && (error.message || error.Message));
			return error;
		}

		if (status === 504) {
			message.error('密码已过期，请重新登录');
			// window.location.replace('/login');
		}
		return err;
	}
);

// axios 对请求的处理
const request = (url, params, config, method, headers = {}) => {
	return new Promise((resolve, reject) => {
		service[method](url, params, Object.assign({}, config))
			.then(
				(response) => {
					response && resolve(response.data);
				},
				(err) => {
					if (err.Cancel) {
						message.error(err);
					} else {
					}
				}
			)
			.catch((err) => {
				reject(err);
			});
	});
};

// get方法
const axiosGet = (url, params, config = {}, headers = {}) => {
	return request(url, params, config, 'get', headers);
};

// get方法 带参数
const axiosGetData = (url, params, config = {}, headers = {}) => {
	url = url + paramsToQueryString(params);
	return request(url, undefined, config, 'get', headers);
};

// delete 方法
const axiosDelete = (url, params, config = {}, headers = {}) => {
	return request(url, params, config, 'delete', headers);
};

// post方法
const axiosPost = (url, params, config = {}, headers = {}) => {
	return request(url, params, config, 'post', headers);
};

// put方法
const axiosPut = (url, params, config = {}, headers = {}) => {
	return request(url, params, config, 'put', headers);
};

export default {
	sources,
	axiosGet,
	axiosGetData,
	axiosDelete,
	axiosPost,
	axiosPut,
};
