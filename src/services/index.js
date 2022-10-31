const baseApi = '/v2';
const API = {
	// 功能api管理
	funcApisList: `${baseApi}/funcapis`,
	funcApiInfo: `${baseApi}/funcapi`,
	funcApiEdit: `${baseApi}/funcapi`,
	funcApiDelete: `${baseApi}/funcapi`,
	funcApiAdd: `${baseApi}/funcapi`,
	funcApiBaseList: `${baseApi}/funcapi2baseapis`,
	funcApiBaseUpdate: `${baseApi}/funcapi2baseapi`,

	// 基础api
	basicApiList: `${baseApi}/baseapis`,
	basicApiInfo: `${baseApi}/baseapi`,
	basicApiEdit: `${baseApi}/baseapi`,
	basicApiDelete: `${baseApi}/baseapi`,
	basicApiAdd: `${baseApi}/baseapi`,
	basicApiBaseList: `${baseApi}/baseapi2funcapis`,
	basicApiBaseUpdate: `${baseApi}/funcapi2baseapi`,

	// 流程相关
	processTreeList: `${baseApi}/processes`, // 获取流程树
	processNodeList: `${baseApi}/process/nodes`,
	processSideList: `${baseApi}/process/sides`,
	processHistoryList: `${baseApi}/process/history`,

	// 表结构相关
	tableImport: `${baseApi}/importtable`, // 导入表结构
	tableImportedList: `${baseApi}/import/tables`
};
export { API };
