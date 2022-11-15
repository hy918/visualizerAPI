import React, { useEffect, useState, useReducer } from 'react';
import { Input, Table, Divider, Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import TipModal from '@/components/TipModal';
import buildCodeService from '@/services/buildCodeService';
import Details from './Details';
import ModalAdd from './Add';
import App from './Add/text';

import './index.less';
const reduer = (state, action) => ({ ...state, ...action });
const initData = { page: 1, size: 10, total: 0, search_key: '' };
const BuilderRoot = (props) => {
	const { tableData, setTableData } = useState([]);
	const [tableState, SettableState] = useReducer(reduer, initData);
	const [searchValue, setSearchValue] = useState('');
	const [deleteVisible, setDelModalVisible] = useState(false);
	const [detailVisible, setdetailModalVisible] = useState(false);
	const [optionId, setOptionId] = useState(0); // 操作的id
	const [addModalvisible, setAddModalVisible] = useState(false);

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
						<span
							className="tool-text"
							onClick={() => download(record?.id)}
						>
							下载
						</span>
					</div>
				);
			},
		},
	];

	useEffect(() => {
		getTableData(tableState);
	}, [tableState]);

	// 获取列表数据
	const getTableData = async ({ page = 1, search_key = '', size = 10 }) => {
		try {
			const data = { page, size, search_key };
			const res = await buildCodeService.buildCodeList(data);
			if (res.code === 10200) {
				setTableData(res?.result?.data);
			}
		} catch (err) {}
	};

	// 切换页码
	const pageChange = (page) => {
		SettableState({ page });
	};

	//删除
	const handleDel = () => {
		setDelModalVisible(false);
		SettableState({ page: 1 });
	};

	// 下载
	const download = (id) => {
		try {
			buildCodeService.download(id);
		} catch (err) {
			message.error(err);
		}
	};

	return (
		<div className="buildTableList">
			<Divider></Divider>
			<div className="g-align-between">
				<Button type="primary" onClick={() => setAddModalVisible(true)}>
					新建
				</Button>
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

			<ModalAdd
				isModalOpen={addModalvisible}
				handleCancel={() => setAddModalVisible(false)}
				ok={() => {
					setAddModalVisible(false);
					setTableData({ page: 1 });
				}}
			/>
		</div>
	);
};

export default BuilderRoot;
