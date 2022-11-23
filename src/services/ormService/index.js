import { API } from '../index';
import apiServerice from '@/axios/axios.js';
import {message} from "antd";

/**
 * 获取列表
 */
const ormCodeList = async (data) => {
	return await apiServerice.axiosGet(API.ormCodeList, data);
};

/**
 * 获取基础信息
 */
const ormCodeInfo = async (id) => {
	return await apiServerice.axiosGet(API.ormCodeInfo, id);
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
	return await apiServerice.axiosPost(API.ormCreate, {type:'file',...data});
};

/**
 * 下载
 */
const ormCodeDownload = async (id) => {
  try {
    const result = await apiServerice.axiosGet(`${API.ormCodeDownload}/${id}`, {}, { responseType: 'blob' });

    if (!result) return;
    // 报错
    if (result?.data?.type === 'application/json') {
      const fileReader = new FileReader();
      const blob2 = new Blob([result?.data], { type: 'application/json' });
      fileReader.readAsText(blob2, 'utf-8');

      fileReader.onload = function () {
        const msg = JSON.parse(fileReader.result);

        message.error(msg?.msg);
      };
      return false;
    }
    // 正常情况下载文件
    const csvType = 'application/zip;charset-UTF-8';
    const blob = new Blob([result?.data], { type: csvType }); // 指定格式
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = result.headers['content-disposition'].split('=')[1]; // 指定导出名称
    link.click();
    URL.revokeObjectURL(link.href);
    return true;
  } catch (err) {
    //
  }
};

const ormService = {
	ormCodeCreate,
	ormCodeInfo,
	ormCodeList,
	ormCodeEdit,
	ormCodeDelete,
	ormCodeDownload,
};
export default ormService;
