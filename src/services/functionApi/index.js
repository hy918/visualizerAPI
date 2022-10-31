import { API } from '../index';
import apiServerice from '@/axios/axios.js';
import {myLocalRedis, mySession} from '../../utils/cache'

/**
 * 获取功能api列表
 */
const funcApisList = async (data) => {
	return await apiServerice.axiosGetData(API.funcApisList, data,{},{'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 获取功能api基础信息
 */
const funcApiInfo = async (id) => {
	return await apiServerice.axiosGet(`${API.funcApiInfo}/${id}`,{},{},{'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 编辑功能api
 */
const funcApiEdit = async (id, data) => {
	return await apiServerice.axiosPost(`${API.funcApiEdit}/${id}`, data,{},{'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 删除功能api
 */
const funcApiDelete = async (id) => {
	return await apiServerice.axiosDelete(`${API.funcApiDelete}/${id}`,{},{},{'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 添加功能api
 */
const funcApiAdd = async (data) => {
	return await apiServerice.axiosPost(API.funcApiAdd, data,{},{'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 获取功能api列表对应基础api
 */
const funcApiBaseList = async (id, data) => {
	return await apiServerice.axiosGetData(
		`${API.funcApiBaseList}/${id}`,
		data,
		{},
		{'password': myLocalRedis.getWithTTL('password')}
	);
};

/**
 * 更新功能api关联关系
 */
const funcApiBaseUpdate = async (data) => {
	return await apiServerice.axiosPost(API.funcApiBaseUpdate, data,{},{'password': myLocalRedis.getWithTTL('password')});
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	funcApisList,
	funcApiInfo,
	funcApiEdit,
	funcApiDelete,
	funcApiAdd,
	funcApiBaseList,
	funcApiBaseUpdate,
};
