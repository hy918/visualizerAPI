// todo 存储进indexeddb，待深入学习
const cache2Indexdb = (function () {
	this.store = window.indexedDB.open('default');
	this.store.onerror = function (event) {
		console.log('Indexdb失败', event);
	};
	this.store.onsuccess = function (event) {
		console.log('Indexdb成功', event);
	};
})();

export { cache2Indexdb };
