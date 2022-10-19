import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Divider, Button, Input, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import funcApiServer from '@/services/functionApi';

import ModalDelete from './ModalDelete';
import ModalCreate from './ModalCreate';
import './index.less';
const SIZE = 10;
const List1 = () => {
	const [delModalVisible, setDelModalVisible] = useState(false); // 控制删除弹窗
	const [addModalVisible, setAddModalVisible] = useState(false); // 控制添加弹窗
	const [delId, setDelId] = useState(0); // 删除的记录id
	const [currentPage, setCurrentPage] = useState(1);
	const [total, setTotal] = useState(0); // 总数
	const [searchValue, setSearchValue] = useState(''); // 搜索的值
	const [tableData, setTableData] = useState([
		{
			id: '1',
			name: 'John Brown',
			age: 32,
			type: 'get',
			fun: 'get',
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			id: '2',
			name: 'Jim Green',
			age: 42,
			fun: 'get',
			type: 'get',
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
		{
			id: '3',
			name: 'Joe Black',
			age: 32,
			type: 'get',
			fun: 'get',
			address: 'Sidney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	]);

	useEffect(() => {
		getTableData({});
	}, []);

	useEffect(() => {
		getTableData({ currentPage });
	}, [currentPage]);

	// 获取列表数据
	const getTableData = async ({ currentPage = 1, searchValue = '' }) => {
		const data = {
			page: currentPage,
			size: SIZE,
			keyword: searchValue,
		};
		try {
			const res = await funcApiServer.funcApisList(data);
			if (res?.code === 10200 && res?.result) {
				setTableData(res?.result?.data);
				setTotal(res?.result.total);
			}
		} catch (err) {}
	};

	// 关闭删除弹窗
	const closeDelModal = () => setDelModalVisible(false);
	//
	const closeAddModal = () => setAddModalVisible(false);

	// 换页
	const pageChange = (page) => {
		setCurrentPage(page);
		// getTableData({ page });
	};

	const columns = [
		{
			title: '功能API名称',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '描述',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: '基础api',
			dataIndex: 'base_api_names',
			key: 'base_api_names',
		},
		{
			title: '类型',
			dataIndex: 'type',
			render: (text) => {
				return <Tag color="green">{text}</Tag>;
			},
		},
		{
			title: '创建时间',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: '父级',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: '操作',
			dataIndex: '',
			key: 'x',
			render: (text, record) => {
				return (
					<div>
						<span className="tool-text">
							<Link to="/home/apiDetail">详情</Link>
						</span>
						<Divider type="vertical" />
						<span
							className="tool-text"
							onClick={() => {
								setDelId(record.id);
								setDelModalVisible(true);
							}}
						>
							删除
						</span>
					</div>
				);
			},
		},
	];

	return (
		<div className="list1Root">
			<h2>功能API列表</h2>
			<Divider />

			<div className="optionTools">
				<Button type="primary" onClick={() => setAddModalVisible(true)}>
					添加功能api
				</Button>
				<div>
					<Input
						placeholder="请输入搜索的关键字"
						suffix={<SearchOutlined />}
						value={searchValue}
						onChange={(e) => {
							setSearchValue(e?.target?.value);
						}}
						onPressEnter={() => {
							getTableData({
								currentPage,
								searchValue,
							});
						}}
						allowClear
					/>
				</div>
			</div>
			<Table
				className="tableRoot"
				columns={columns}
				dataSource={tableData}
				rowKey={(record) => record?.id}
				pagination={{
					current: currentPage,
					pageSize: 2,
					total: total,
					onChange: pageChange,
				}}
			/>

			<ModalDelete
				isModalOpen={delModalVisible}
				id={delId}
				handleCancel={closeDelModal}
				getTableData={getTableData}
			/>
			<ModalCreate
				isModalOpen={addModalVisible}
				handleCancel={closeAddModal}
				getTableData={getTableData}
			/>
		</div>
	);
};
export default List1;
