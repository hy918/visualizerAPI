import {API} from '../index';
import apiServerice from '@/axios/axios.js';


const processList = async (data) => {
    return await apiServerice.axiosGetData(API.processTreeList, data);
}

const processNodeList = async (data) => {
    return await apiServerice.axiosGetData(API.processNodeList,data);
}

const processSideList = async (data) => {
    return await apiServerice.axiosGetData(API.processSideList,data);
}

const ProcessHistoryList = async (data) => {
    return await apiServerice.axiosGetData(API.processHistoryList,data)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    processList,
    processNodeList,
    processSideList,
    ProcessHistoryList,
};