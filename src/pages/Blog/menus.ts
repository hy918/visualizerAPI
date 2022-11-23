const blogMenus = [
	{
		key: '/blog/statistics',
		children: [],
		title: '数据驾驶舱',
	},
	{
		key: '/blog/write',
		children: [],
		title: '一键发布',
	},
  {
		key: '/blog/manage',
		children: [
			{ key: '/blog/manage/content', title: '内容管理' },
			{
				key: '/blog/manage/comment',
				title: '评论管理',
			},
      {
				key: '/blog/manage/fans',
				title: '粉丝及关注',
			},
		],
		title: '管理中心',
	},
	{
		key: '/blog/material',
		children: [],
		title: '素材中心',
	},
	{
		key: '/blog/account',
		children: [],
		title: '账号中心',
	},
];

export { blogMenus };
