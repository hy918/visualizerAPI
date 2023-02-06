import { API } from '../index';
import apiServerice from '@/axios/axios.js';

import downloadService from "@/utils/downloadFile.js"
/**
 * 获取列表
 */
const json2DtoCodeList = async (data) => {
  return await apiServerice.axiosGet(API.json2DtoCodeList, data);
};

/**
 * 获取基础信息
 */
const json2DtoCodeInfo = async (id) => {
  return await apiServerice.axiosGet(API.json2DtoCodeInfo, id);
};

/**
 * 编辑
 */
const json2DtoCodeEdit = async (data) => {
  return await apiServerice.axiosPost(API.json2DtoCodeEdit, data);
};

/**
 * 删除
 */
const json2DtoCodeDelete = async (id) => {
  return await apiServerice.axiosDelete(`${API.json2DtoCodeDelete}/${id}`);
};

/**
 * 添加
 */
const json2DtoCodeCreate = async (data) => {
  return await apiServerice.axiosPost(API.json2DtoCreate, {type:'file',...data});
};

/**
 * 下载
 */
const json2DtoCodeDownload = async (id) => {
  try {
    const result = await apiServerice.axiosGet(`${API.json2DtoCodeDownload}/${id}`, {}, { responseType: 'blob' });
    return downloadService.downloadFromStream({result,type:'json2dto'});
  } catch (err) {
    //
  }
};

const json2DtoService = {
  json2DtoCodeCreate,
  json2DtoCodeInfo,
  json2DtoCodeList,
  json2DtoCodeEdit,
  json2DtoCodeDelete,
  json2DtoCodeDownload,
};
export default json2DtoService;