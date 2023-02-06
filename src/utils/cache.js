import {
  getNowTimestamp,
  isExpire,
  timestampPlusSecond,
} from './datetimeutils';

/**
 * sessionStorage封装, 对存入的数据进行url编码
 * 全局存储：类似于后端的Redis。
 */
const mySession = new (function () {
  // 定义sessionStorage对象
  this.store = window.sessionStorage;

  // 解码取出
  this.get = (key) => {
    const data = this.store.getItem(key);

    return JSON.parse(data);
  };

  // 编码存入
  this.set = (key, data) => {
    const encodeData = JSON.stringify(data);

    this.store.setItem(key, encodeData);
  };

  // 删除
  this.remove = (key) => {
    this.store.removeItem(key);
  };

  this.setWithTTL = (key, data, ttl) => {
    this.set(key, data);
    let ttls = this.get('ttl-cache');
    if (ttls === null) {
      ttls = {};
    } else {
      ttls = JSON.parse(ttls);
    }
    ttls[key] = timestampPlusSecond(getNowTimestamp(), ttl);
    this.set('ttl-cache', ttls);
  };

  this.getWithTTL = (key) => {
    let ttls = this.get('ttl-cache');
    if (ttls === null) {
      // todo 如果ttls为空，则表明缓存失效了，则不返回任何结果
      return null;
    }
    // console.log(ttls)
    ttls = JSON.parse(ttls);
    let expireTimestamp = ttls[key];
    if (expireTimestamp === null || expireTimestamp === -1) return null;
    if (isExpire(expireTimestamp)) {
      // todo 超时了，清空缓存，返回null
      this.remove(key);
      ttls[key] = -1;
      this.set('ttl-cache', ttls);
      return null;
    }
    let val = this.get(key);
    return val;
  };
})();

/**
 * localStorage封装, 对存入的数据进行url编码
 * 全局存储：类似于后端的Redis。
 */
const myLocalRedis = new (function () {
  // 定义sessionStorage对象
  this.store = window.localStorage;

  // 解码取出
  this.get = (key) => {
    const data = this.store.getItem(key);
    if (data === null || data === 'undifined') {
      // console.log('-------cache', key, data);
      return null;
    }
    let x = JSON.parse(data);
    if (x === '"true"' || x === '"false"') {
      x = JSON.parse(x);
    }
    // console.log('+++++++cache', key, x);
    return x;
  };

  // 编码存入
  this.set = (key, data) => {
    const encodeData = JSON.stringify(data);
    this.store.setItem(key, JSON.stringify(encodeData));
  };

  // 删除
  this.remove = (key) => {
    this.store.removeItem(key);
  };

  this.setWithTTL = (key, data, ttl) => {
    this.set(key, data);
    let ttls = this.get('ttl-cache');
    if (ttls === null) {
      ttls = {};
    } else {
      ttls = JSON.parse(ttls);
    }
    ttls[key] = timestampPlusSecond(getNowTimestamp(), ttl);
    this.set('ttl-cache', ttls);
  };

  this.getWithTTL = (key) => {
    let ttls = this.get('ttl-cache');
    if (ttls === null) {
      // todo 如果ttls为空，则表明缓存失效了，则不返回任何结果
      return null;
    }
    // console.log(ttls)
    ttls = JSON.parse(ttls);
    let expireTimestamp = ttls[key];
    if (expireTimestamp === null || expireTimestamp === -1) return null;
    if (isExpire(expireTimestamp)) {
      // todo 超时了，清空缓存，返回null
      this.remove(key);
      ttls[key] = -1;
      this.set('ttl-cache', ttls);
      return null;
    }
    let val = this.get(key);
    return val;
  };
})();

export {mySession, myLocalRedis};
