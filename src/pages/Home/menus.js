const homeMenus = [
	{
		key: '/home/apiManage',
		children: [
			{ key: '/home/apiManage/function', title: '功能API管理' },
			{ key: '/home/apiManage/basic', title: '基础API管理' },
		],
		title: '基础-功能API管理',
	},
	// {
	// 	key: '/home/process',
	// 	children: [
	// 		{ key: '/home/process/tree', title: '流程树管理' },
	// 		{ key: '/home/process/node', title: '流程节点管理' },
	// 		{ key: '/home/process/side', title: '流程边管理' },
	// 		{ key: '/home/process/history', title: '流程历史管理' },
	// 	],
	// 	title: '基础-流程可视化配置',
	// },
	// {
	// 	key: '/home/dataManage',
	// 	children: [
	// 		{ key: '/home/dataManage/import', title: '导入建表语句' },
	// 		{
	// 			key: '/home/dataManage/localconnect',
	// 			title: '本连接的所有表管理',
	// 		},
	// 	],
	// 	title: '数据表管理',
	// },
	{
		key: '/home/codeManage',
		children: [
			{
			  key: '/home/codeManage/builder',
        title: 'Java相关'
      },
			{
				key: '/home/codeManage/ORM',
				title: 'Js相关',
			},
		],
		title: '代码生成管理',
	},
  {
    key: '/home/tools',
    children: [
      {
        key: '/home/tools/request',
        title: '各类请求'
      }
    ],
    title: '在线工具集',
  },
];

export { homeMenus };
