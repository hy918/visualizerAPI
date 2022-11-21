import React, { useEffect, useState, useReducer } from 'react';
import { Input, Table, Divider, Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import ormService from '@/services/ormService';
import TipModal from '@/components/TipModal';
import Details from './Details';
import CreateModal from './Add';

import './style.less';
const reduer = (state, action) => ({ ...state, ...action });
const initData = { page: 1, size: 10, total: 0, search_key: '' };
const RomTable = (props) => {
	const [tableState, SetTableState] = useReducer(reduer, initData);
	const [searchValue, setSearchValue] = useState('');
	const [deleteVisible, setDelModalVisible] = useState(false);
	const [addModalvisible, setAddModalVisible] = useState(false); // 新增弹窗
	const [detailVisible, setdetailModalVisible] = useState(false); // 详情弹窗
	const [optionId, setOptionId] = useState(0); // 操作的id
	const [tableData, setTableData] = useState([]); // 表格数据

	const columns = [
		{
			title: '数量',
			dataIndex: 'table_number',
			key: 'table_number',
		},
		{
			title: '文件名称',
			dataIndex: 'file_name',
			key: 'file_name',
		},
		{
			title: 'md5',
			dataIndex: 'text_md5',
			key: 'text_md5',
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
						<span className="tool-text" onClick={() => download(record?.id)}>
							下载
						</span>
					</div>
				);
			},
		},
	];

	useEffect(() => {
		getTableData({});
	}, []);

	// 获取列表数据
	const getTableData = async ({ page = 1, search_key = '', size = 10 }) => {
		try {
			const data = { page, size, search_key };
			const res = await ormService.buildCodeList(data);
			if (res.code === 10200) {
				setTableData(res?.result.data);
				SetTableState({ total: res?.result?.total });
			}
		} catch (err) {}
	};

	// 切换页码
	const pageChange = (page, size) => {
		SetTableState({ page, size });
		getTableData(tableState);
	};

	//删除
	const handleDel = async () => {
		try {
			const res = await ormService.buildCodeDelete({ optionId });
			if (res?.code === 10200) {
				message.success('删除成功');
				setDelModalVisible(false);
				SetTableState({ page: 1 });
				return;
			}
			message.error(res?.mag);
		} catch (err) {}
	};

	// 下载
	const download = async (id) => {
		try {
			await ormService.buildCodeDownload(id);
		} catch (err) {
			message.error(err);
		}
	};

	// 新建回调
	const createCallback = () => {
		setAddModalVisible(false);
		SetTableState({ page: 1 });
		getTableData(tableState);
	};

	return (
		<div className="ormTableList">
			<h2>ORM</h2>
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
							SetTableState({ search_key: e?.target?.value });
						}}
						allowClear
					></Input>
					<Button type="primary g-ml-2" onClick={() => SetTableState({ search_key: searchValue })}>
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

			<CreateModal visible={addModalvisible} onOk={createCallback} onCancel={() => setAddModalVisible(false)} />
		</div>
	);
};

export default RomTable;
