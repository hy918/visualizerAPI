import { API } from '../index';
import { message } from 'antd';
import apiServerice from '@/axios/axios.js';

/**
 * 获取列表
 */
const buildCodeList = async (data) => {
	return await apiServerice.axiosGetData(API.buildCodeList, data);
};

/**
 * 获取基础信息
 */
const buildCodeInfo = async (id) => {
	return await apiServerice.axiosGet(`${API.buildCodeInfo}/${id}`);
};

/**
 * 编辑
 */
const buildCodeEdit = async (id, data) => {
	return await apiServerice.axiosPost(`${API.buildCodeEdit}/${id}`, data);
};

/**
 * 删除
 */
const buildCodeDelete = async (id) => {
	return await apiServerice.axiosDelete(`${API.buildCodeDelete}/${id}`);
};

/**
 * 添加
 */
const buildCodeCreate = async (data) => {
	return await apiServerice.axiosPost(API.buildCodeCreate, {
		type: 'file',
		...data,
	});
};

/**
 * 下载
 */
const buildCodeDownload = async (id) => {
	try {
		const result = await apiServerice.axiosGet(
			`${API.buildCodeDownload}/${id}`,
			{},
			{
				responseType: 'blob',
			}
		);

		if (!result) return;
		// 报错
		if (result.type === 'application/json') {
			const fileReader = new FileReader();
			const blob2 = new Blob([result], {
				type: 'application/json',
			});
			fileReader.readAsText(blob2, 'utf-8');

			fileReader.onload = function () {
				const msg = JSON.parse(fileReader.result);

				message.error(msg?.msg);
			};
			return false;
		}
		// 正常情况下载zip
		const csvType = 'application/zip;charset-UTF-8';
		const blob = new Blob([result], { type: csvType }); // 指定格式
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = 'code.txt'; // 指定导出名称
		link.click();
		URL.revokeObjectURL(link.href);
		return true;
	} catch (err) {
		//
	}
};

const buildCodeService = {
	buildCodeCreate,
	buildCodeList,
	buildCodeInfo,
	buildCodeEdit,
	buildCodeDelete,
	buildCodeDownload,
};

export default buildCodeService;