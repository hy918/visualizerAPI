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
	tableImportedList: `${baseApi}/import/tables`,
	tableImportMd5s: `${baseApi}/imports`,

	// 生成代码
	buildCodeCreate: `${baseApi}/generatecode/builder/add`,
	buildCodeList: `${baseApi}/generatecode/builders`,
	buildCodeInfo: `${baseApi}/generatecode/builder`,
	buildCodeEdit: `${baseApi}/generatecode/builder`,
	buildCodeDelete: `${baseApi}/generatecode/builder`,
	buildCodeDownload: `${baseApi}/generatecode/builder/download`,

	//ORM
	ormCreate: `${baseApi}/generatecode/orm/add`,
	ormCodeList: `${baseApi}/generatecode/orms`,
	ormCodeInfo: `${baseApi}/generatecode/orm`,
	ormCodeEdit: `${baseApi}/generatecode/orm`,
	ormCodeDelete: `${baseApi}/generatecode/orm`,
	ormCodeDownload: `${baseApi}/generatecode/orm/download`,

  //Json转Dto
  json2DtoCreate: `${baseApi}/generatecode/json2dto/add`,
  json2DtoCodeList: `${baseApi}/generatecode/json2dtos`,
  json2DtoCodeInfo: `${baseApi}/generatecode/json2dto`,
  json2DtoCodeEdit: `${baseApi}/generatecode/json2dto`,
  json2DtoCodeDelete: `${baseApi}/generatecode/json2dto`,
  json2DtoCodeDownload: `${baseApi}/generatecode/json2dto/download`,

  //利用Json生成SQL
  json2SqlCreate: `${baseApi}/generatecode/json2sql/add`,
  json2SqlCodeList: `${baseApi}/generatecode/json2sqls`,
  json2SqlCodeInfo: `${baseApi}/generatecode/json2sql`,
  json2SqlCodeEdit: `${baseApi}/generatecode/json2sql`,
  json2SqlCodeDelete: `${baseApi}/generatecode/json2sql`,
  json2SqlCodeDownload: `${baseApi}/generatecode/json2sql/download`,

};
export { API };
