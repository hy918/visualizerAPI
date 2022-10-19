import React, { useEffect, useState } from 'react';
import { Table, Divider, Button, Input, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import ModalDelete from './ModalDelete';
import './index.less';
const List2 = () => {
	const [delModalVisible, setDelModalVisible] = useState(false); // 控制删除弹窗
	const [delId, setDelId] = useState(0); // 删除的记录id
	const [currentPage, setCurrentPage] = useState(1);
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
		getTableData({ currentPage, searchValue });
	}, [currentPage, searchValue]);

	// 关闭删除弹窗
	const closeDelModal = () => setDelModalVisible(false);

	// 获取列表数据
	const getTableData = ({ currentPage = 1, searchValue = '' }) => {};

	// 换页
	const pageChange = (page) => {
		setCurrentPage(page);
		// getTableData({ page });
	};
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: '方法',
			dataIndex: 'fun',
			key: 'fun',
		},
		{
			title: '类型',
			dataIndex: 'type',
			render: (text) => {
				return <Tag color="green">{text}</Tag>;
			},
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Action',
			dataIndex: '',
			key: 'x',
			render: (text, record) => {
				return (
					<div>
						<span className="tool-text">详情</span>
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
		<div className="list2Root">
			<h2>基础API列表</h2>
			<Divider />

			<div className="optionTools">
				<Button type="primary">添加基础api</Button>
				<div>
					<Input
						placeholder="请输入搜索的关键字"
						suffix={<SearchOutlined />}
						onChange={(e) => {
							setSearchValue(e?.target?.value);
						}}
						allowClear
					/>
				</div>
			</div>
			<Table
				className="tableRoot"
				columns={columns}
				dataSource={tableData}
				pagination={{
					current: currentPage,
					pageSize: 2,
					total: tableData.length,
					onChange: pageChange,
				}}
			/>

			<ModalDelete
				isModalOpen={delModalVisible}
				id={delId}
				handleCancel={closeDelModal}
			/>
		</div>
	);
};
export default List2;
