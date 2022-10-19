import React from 'react';
import { Divider } from 'antd';
import Information from './Information';
import TableList from './TableList';
import './index.less';
const ApiDetail = (props) => {
	return (
		<div className="apiDetailRoot">
			<div className="infor-title">功能API/详情</div>
			<Divider />
			<Information />
			<TableList />
		</div>
	);
};
export default ApiDetail;
