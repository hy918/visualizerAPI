import { Button, Input } from 'antd';

import React from 'react';
import { Link } from 'react-router-dom';

import editIcon from '@/assets/image/edit.svg';
import './index.less';
const Information = (props) => {
	const { api } = props;
	return (
		<div className="informationRoot">
			<div className="name">名称：组织数</div>
			<div className="information-content">
				<div className="left">
					<div className="item">
						<div>
							描述：
							<span>xxxx</span>
							<Input className="hide-img"></Input>
						</div>
						<img
							src={editIcon}
							alt=""
							className="hide-img show"
						></img>
					</div>
				</div>
				<div className="left">
					<div className="item">
						<div>
							父级名称：
							<span>xxxx</span>
							<Input className="hide-img"></Input>
						</div>
						<img
							src={editIcon}
							alt=""
							className="hide-img show"
						></img>
					</div>
					<div className="item">
						<div>
							父级描述：<span>xxxx</span>
							<Input className="hide-img"></Input>
						</div>
						<img
							src={editIcon}
							alt=""
							className="hide-img show"
						></img>
					</div>
				</div>
				<div className="right">
					<div className="item">
						<div>
							类型：<span>xxxx</span>
							<Input className="hide-img"></Input>
						</div>
						<img
							src={editIcon}
							alt=""
							className="hide-img show"
						></img>
					</div>
					<div className="item">
						<div>
							创建时间：<span>xxxx</span>
							<Input className="hide-img"></Input>
						</div>
						<img
							src={editIcon}
							alt=""
							className="hide-img show"
						></img>
					</div>
				</div>
			</div>
			<Button>
				<Link to="/home/list1">返回</Link>
			</Button>
		</div>
	);
};
export default Information;
