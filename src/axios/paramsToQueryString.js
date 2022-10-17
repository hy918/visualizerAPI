import _ from 'lodash';

const objectToString = (data) => {
	const type = Object.prototype.toString.call(data);

	return type === '[object  Object]' ? JSON.stringify(data) : data;
};

const paramsToQueryString = (params) => {
	const type = Object.prototype.toString.call(params);
	if (type !== '[object  Object]') return params;

	const keys = _.keys(params);

	if (keys.length === 0) return;

	const queryString = _.map(keys, (key) => {
		const value = objectToString(params[key]);
		return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
	}).join('&');

	return `?${queryString}`;
};

export { paramsToQueryString };
