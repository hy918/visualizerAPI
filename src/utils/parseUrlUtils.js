/**
 * @param key 要获取的参数名字
 * @returns 返回参数的值
 */
const getParam = (key) => {
	let objParam = {};
	if (URLSearchParams) {
		objParam = Object.fromEntries(
			new URLSearchParams(window.location.search).entries()
		);
		return objParam[key];
	}
	const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, 'i');
	const r = window.location.search.substr(1).match(reg);
	if (r !== null) {
		return decodeURI(r[2]);
	}
	return null;
};

export { getParam };
