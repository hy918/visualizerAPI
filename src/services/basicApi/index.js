import { API } from '../index';
import apiServerice from '@/axios';

/**
 * 获取功能api列表
 */
const basicApiList = async (data) => {
	return await apiServerice.axiosGetData(API.basicApiList, data);
};

/**
 * 获取功能api基础信息
 */
const basicApiInfo = async (id) => {
	return await apiServerice.axiosGetData(`${API.basicApiInfo}/${id}`);
};

/**
 * 编辑功能api
 */
const basicApiEdit = async (id, data) => {
	return await apiServerice.axiosPost(`${API.basicApiEdit}/${id}`, data);
};

/**
 * 删除功能api
 */
const basicApiDelete = async (id) => {
	return await apiServerice.axiosDelete(`${API.basicApiDelete}/${id}`);
};

/**
 * 添加功能api
 */
const basicApiAdd = async (data) => {
	return await apiServerice.axiosPost(API.basicApiAdd, data);
};

/**
 * 获取功能api列表对应基础api
 */
const basicApiBaseList = async (id) => {
	return await apiServerice.axiosGetData(`${API.basicApiBaseList}/${id}`);
};

/**
 * 更新功能api关联关系
 */
const basicApiBaseUpdate = async (data) => {
	return await apiServerice.axiosPost(API.basicApiBaseUpdate, data);
};

export {
	basicApiList,
	basicApiInfo,
	basicApiEdit,
	basicApiDelete,
	basicApiAdd,
	basicApiBaseList,
	basicApiBaseUpdate,
};
