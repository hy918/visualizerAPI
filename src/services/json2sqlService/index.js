import { API } from '../index';
import apiServerice from '@/axios/axios.js';

import downloadService from "@/utils/downloadFile.js"
/**
 * 获取列表
 */
const json2SqlCodeList = async (data) => {
  return await apiServerice.axiosGet(API.json2SqlCodeList, data);
};

/**
 * 获取基础信息
 */
const json2SqlCodeInfo = async (id) => {
  return await apiServerice.axiosGet(API.json2SqlCodeInfo, id);
};

/**
 * 编辑
 */
const json2SqlCodeEdit = async (data) => {
  return await apiServerice.axiosPost(API.json2SqlCodeEdit, data);
};

/**
 * 删除
 */
const json2SqlCodeDelete = async (id) => {
  return await apiServerice.axiosDelete(`${API.json2SqlCodeDelete}/${id}`);
};

/**
 * 添加
 */
const json2SqlCodeCreate = async (data) => {
  return await apiServerice.axiosPost(API.json2SqlCreate, {type:'file',...data});
};

/**
 * 下载
 */
const json2SqlCodeDownload = async (id) => {
  try {
    const result = await apiServerice.axiosGet(`${API.json2SqlCodeDownload}/${id}`, {}, { responseType: 'blob' });
    return downloadService.downloadFromStream({result,type:'json2Sql'});
  } catch (err) {
    //
  }
};

const json2SqlService = {
  json2SqlCodeCreate,
  json2SqlCodeInfo,
  json2SqlCodeList,
  json2SqlCodeEdit,
  json2SqlCodeDelete,
  json2SqlCodeDownload,
};
export default json2SqlService;