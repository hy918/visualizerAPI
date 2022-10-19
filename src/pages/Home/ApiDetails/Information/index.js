import { Button } from 'antd';

import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';
const Information = (props) => {
	const { api } = props;
	return (
		<div className="informationRoot">
			<div className="name">名称：组织数</div>
			<div className="information-content">
				<div className="left">
					<div className="item">描述：xxxx</div>
				</div>
				<div className="left">
					<div className="item">父级名称：xxxx</div>
					<div className="item">父级描述：xxxx</div>
				</div>
				<div className="right">
					<div className="item">类型：xxxxx</div>
					<div className="item">创建时间：xxxxxx</div>
				</div>
			</div>
			<Button>
				<Link to="/home/list1">返回</Link>
			</Button>
		</div>
	);
};
export default Information;
