import React, { useState } from 'react';
import { Select, Table, Divider, Tag } from 'antd';

import './index.less';
const TableList = () => {
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
						<span className="tool-text">移除关联</span>
						<Divider type="vertical" />
						<span className="tool-text">增加关联</span>
					</div>
				);
			},
		},
	];

	return (
		<div className="tableListRoot">
			<div>
				<span>选择类型</span>
				<Select defaultValue="all" className="select-text">
					<Select.Option value="all">全部</Select.Option>
					<Select.Option value="not">未关联</Select.Option>
					<Select.Option value="associated">已关联</Select.Option>
				</Select>
			</div>
			<Table
				columns={columns}
				dataSource={tableData}
				className="table-box"
			/>
		</div>
	);
};
export default TableList;
