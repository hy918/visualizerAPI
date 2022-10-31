import {API} from '../index';
import apiServerice from '@/axios/axios.js';
import {myLocalRedis, mySession} from '../../utils/cache'


/**
 * 获取功能api列表
 */
const basicApiList = async (data) => {
    return await apiServerice.axiosGetData(API.basicApiList, data, {}, {'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 获取功能api基础信息
 */
const basicApiInfo = async (id) => {
    return await apiServerice.axiosGet(`${API.basicApiInfo}/${id}`,{},{},{'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 编辑功能api
 */
const basicApiEdit = async (id, data) => {
    return await apiServerice.axiosPost(`${API.basicApiEdit}/${id}`, data,{},{'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 删除功能api
 */
const basicApiDelete = async (id) => {
    return await apiServerice.axiosDelete(`${API.basicApiDelete}/${id}`,{},{},{'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 添加功能api
 */
const basicApiAdd = async (data) => {
    return await apiServerice.axiosPost(API.basicApiAdd, data,{},{'password': myLocalRedis.getWithTTL('password')});
};

/**
 * 获取功能api列表对应基础api
 */
const basicApiBaseList = async (id, data) => {
    return await apiServerice.axiosGetData(
        `${API.basicApiBaseList}/${id}`,
        data,
        {},
        {'password': myLocalRedis.getWithTTL('password')}
    );
};

/**
 * 更新功能api关联关系
 */
const basicApiBaseUpdate = async (data) => {
    return await apiServerice.axiosPost(API.basicApiBaseUpdate, data,{},{'password': myLocalRedis.getWithTTL('password')});
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    basicApiList,
    basicApiInfo,
    basicApiEdit,
    basicApiDelete,
    basicApiAdd,
    basicApiBaseList,
    basicApiBaseUpdate,
};
