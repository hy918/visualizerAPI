import React, { useEffect, useState, useReducer } from 'react';
import { Input, Table, Divider, Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import TipModal from '@/components/TipModal';
import buildCodeService from '@/services/buildCodeService';
import Details from './Details';
import ModalAdd from './Add';

import './index.less';
const reduer = (state, action) => ({ ...state, ...action });
const initData = { page: 1, size: 10, total: 10, search_key: '' };

const BuilderRoot = (props) => {
	const [tableData, setTableData] = useState([{ id: 1, class_name: '名字' }]); // 表格数据
	const [tableState, SettableState] = useReducer(reduer, initData); // 筛查数据的status
	const [searchValue, setSearchValue] = useState(''); // 搜索关键字
	const [deleteVisible, setDelModalVisible] = useState(false); // 控制删除弹窗
	const [detailVisible, setdetailModalVisible] = useState(false); // 控制详情弹窗
	const [optionId, setOptionId] = useState(0); // 操作的id
	const [addModalvisible, setAddModalVisible] = useState(false); // 新建弹窗

	const columns = [
		{
			title: '名字',
			dataIndex: 'class_name',
			key: 'class_name',
		},
		{
			title: '字段列表',
			dataIndex: 'fields',
			key: 'fields',
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
			key: 'action',
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

	useEffect(() => {
		getTableData({});
	}, []);

	// 获取列表数据
	const getTableData = async ({ page = 1, search_key = '', size = 10 }) => {
		try {
			const data = { page, size, search_key };
			const res = await buildCodeService.buildCodeList(data);
			if (res.code === 10200) {
				setTableData(res?.result.data);
			}
		} catch (err) {}
	};

	// 切换页码
	const pageChange = (page) => {
		SettableState({ page });
	};

	//删除
	const handleDel = async () => {
		try {
			const res = await buildCodeService.buildCodeDelete({ optionId });
			if (res?.code === 10200) {
				message.success('删除成功');
				setDelModalVisible(false);
				SettableState({ page: 1 });
				return;
			}
			message.error(res?.mag);
		} catch (err) {}
	};

	// 下载
	const download = async (id) => {
		try {
			const res = await buildCodeService.buildCodeDownload(id);
		} catch (err) {
			message.error(err);
		}
	};

	return (
		<div className="buildTableList">
			<h2>Builder</h2>
			<Divider></Divider>
			<div className="g-align-between">
				<Button type="primary" onClick={() => setAddModalVisible(true)}>
					新建
				</Button>
				<div className="g-flex">
					<Input
						suffix={<SearchOutlined />}
						placeholder="请输入搜索关键字"
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
			<div>
				<Table
					columns={columns}
					dataSource={tableData}
					className="g-mt-6"
					rowKey={(record) => record?.id}
					bordered
					pagination={false}
				/>
			</div>
			<TipModal
				title="删除"
				content="确定要删除吗？数据将无法回复请谨慎操作。"
				visible={deleteVisible}
				onCancel={() => setDelModalVisible(false)}
				ok={handleDel}
			/>

			<Details
				id={optionId}
				editVisible={detailVisible}
				onCancal={() => setdetailModalVisible(false)}
			/>

			<ModalAdd
				isModalOpen={addModalvisible}
				handleCancel={() => setAddModalVisible(false)}
				ok={() => {
					setAddModalVisible(false);
					SettableState({ page: 1 });
				}}
			/>
		</div>
	);
};

export default BuilderRoot;
