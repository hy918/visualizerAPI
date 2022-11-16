import { API } from '../index';
import apiServerice from '@/axios/axios.js';

/**
 * 获取列表
 */
const ormCodeList = async (data) => {
	return await apiServerice.axiosGetData(API.ormCodeList, data);
};

/**
 * 获取基础信息
 */
const ormCodeInfo = async (id) => {
	return await apiServerice.axiosGetData(API.ormCodeInfo, id);
};

/**
 * 编辑
 */
const ormCodeEdit = async (data) => {
	return await apiServerice.axiosPost(API.ormCodeEdit, data);
};

/**
 * 删除
 */
const ormCodeDelete = async (id) => {
	return await apiServerice.axiosDelete(`${API.ormCodeDelete}/${id}`);
};

/**
 * 添加
 */
const ormCodeCreate = async (data) => {
	return await apiServerice.axiosPost(API.ormCreate, data);
};

/**
 * 下载
 */
const ormCodeDownload = async (data) => {};

const ormService = {
	ormCodeCreate,
	ormCodeInfo,
	ormCodeList,
	ormCodeEdit,
	ormCodeDelete,
	ormCodeDownload,
};
export default ormService;
