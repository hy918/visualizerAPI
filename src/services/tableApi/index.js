import { API } from '../index';
import apiServerice from '@/axios/axios.js';

const importTable = async (data) => {
	return await apiServerice.axiosPost(API.tableImport, data);
};

const tmpTableList = async (data) => {
	return await apiServerice.axiosGet(API.tableImportedList, data);
};

const tmpMd5s = async () => {
	return await apiServerice.axiosGet(API.tableImportMd5s, {});
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	importTable,
	tmpTableList,
	tmpMd5s,
};
