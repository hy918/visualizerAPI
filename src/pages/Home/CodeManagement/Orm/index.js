import React, { useEffect, useState, useReducer } from 'react';
import { Input, Table, Divider, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import TipModal from '@/components/TipModal';
import Details from './Details';

import './style.less';
const reduer = (state, action) => ({ ...state, ...action });
const initData = { page: 1, size: 10, total: 0, search_key: '' };
const ObRelationRoot = (props) => {
	const { tableData } = props;
	const [tableState, SettableState] = useReducer(reduer, initData);
	const [searchValue, setSearchValue] = useState('');
	const [deleteVisible, setDelModalVisible] = useState(false);
	const [detailVisible, setdetailModalVisible] = useState(false);
	const [optionId, setOptionId] = useState(0); // 操作的id

	const columns = [
		{
			title: '名字',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '字段列表',
			dataIndex: 'list',
			key: 'list',
		},
		{
			title: '文件名称',
			dataIndex: 'file_name',
			key: 'file_name',
		},
		{
			title: '创建时间',
			dataIndex: 'created_time',
			key: 'created_time',
		},
		{
			title: '操作',
			dataIndex: '',
			key: 'x',
			with: 200,
			render: (text, record) => {
				return (
					<div>
						<span
							className="tool-text"
							onClick={() => {
								setOptionId(record?.id);
								setdetailModalVisible(true);
							}}
						>
							详情
						</span>
						<Divider type="vertical" />
						<span
							className="tool-text"
							onClick={() => {
								setOptionId(record?.id);
								setDelModalVisible(true);
							}}
						>
							删除
						</span>
						<Divider type="vertical" />
						<span className="tool-text">下载</span>
					</div>
				);
			},
		},
	];

	useEffect(() => {
		getTableData(tableState);
	}, [tableState]);

	// 获取列表数据
	const getTableData = async ({ page = 1, size = 10, search_key = '' }) => {
		try {
			const data = { page, size, search_key };
		} catch (err) {}
	};

	//
	const pageChange = (page) => {
		SettableState({ page });
	};

	//
	const handleDel = () => {};

	return (
		<div className="ormTableList">
			<h2>Build</h2>
			<Divider></Divider>
			<div className="g-align-between">
				<Button type="primary">新建</Button>
				<div className="g-flex">
					<Input
						suffix={<SearchOutlined />}
						onChange={(e) => setSearchValue(e?.target?.value)}
						onPressEnter={(e) => {
							SettableState({ search_key: e?.target?.value });
						}}
						allowClear
					></Input>
					<Button
						type="primary g-ml-2"
						onClick={() =>
							SettableState({ search_key: searchValue })
						}
					>
						搜索
					</Button>
				</div>
			</div>
			<Table
				columns={columns}
				dataSource={tableData}
				className="g-mt-6"
				rowKey={(record) => record?.id}
				bordered
				pagination={{
					current: tableState.page,
					pageSize: tableState.size,
					total: tableState.total,
					onChange: pageChange,
					showSizeChanger: true,
					pageSizeOptions: [10, 20, 100, 500],
				}}
			/>

			<TipModal
				title="删除"
				content="确定要删除吗？数据将无法"
				visible={deleteVisible}
				onCancel={() => setDelModalVisible(false)}
				ok={handleDel}
			/>

			<Details id={optionId} visible={detailVisible} />
		</div>
	);
};

export default ObRelationRoot;
