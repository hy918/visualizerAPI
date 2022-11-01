import { API } from '../index';
import apiServerice from '@/axios/axios.js';

const importTable = async (data) => {
	return await apiServerice.axiosPost(API.tableImport, data);
};

const tmpTableList = async (data) => {
	return await apiServerice.axiosGetData(API.tableImportedList, data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	importTable,
	tmpTableList,
};
