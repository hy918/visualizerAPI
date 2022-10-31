/**
 * 判断是否超时
 * @param oldTime
 * @returns {boolean}
 */
const isExpire = (oldTime) => {
	let nowTime = new Date().getTime();
	if (nowTime > oldTime) {
		return true;
	}
	return false;
};

const timestamp2Date = (timestamp) => {
	return new Date(timestamp);
};

const getDateStrByDate = (date) => {
	return date.toLocaleString();
};

const getTimestampByDate = (date) => {
	return date.getTime();
};

const dateStr2Timestamp = (dateStr) => {
	return getTimestampByDate(new Date(dateStr));
};

/**
 * 获取当前时间戳
 * @returns {number}
 */
const getNowTimestamp = () => {
	return getTimestampByDate(new Date());
};

const timestamp2DateStr = (timestamp) => {
	return getDateStrByDate(timestamp2Date(timestamp));
};

const timestampPlusSecond = (timestamp, second) => {
	return timestamp + second * 1000;
};

const timestampPlusMinute = (timestamp, minute) => {
	return timestamp + minute * 1000 * 60;
};

const dateStrPlusSecond = (dateStr, second) => {
	return timestampPlusSecond(dateStr2Timestamp(dateStr), second);
};

const dateStrPlusMinute = (dataStr, minute) => {
	return timestampPlusMinute(dateStr2Timestamp(dataStr), minute);
};

export {
	getNowTimestamp,
	isExpire,
	timestamp2Date,
	timestamp2DateStr,
	getTimestampByDate,
	getDateStrByDate,
	timestampPlusSecond,
	timestampPlusMinute,
	dateStrPlusMinute,
	dateStrPlusSecond,
};
