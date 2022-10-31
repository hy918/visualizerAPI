import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import _ from 'lodash';
import ApiManageMent from './APIManagement';
import ProcessList from './Process';
import DataManageMent from './Table';
import { homeMenus } from './menus';
import './index.less';

const { Sider, Content, Header } = Layout;

class Home extends React.Component {
	state = {
		collapsed: false,
		visible: false,
		menuKey: ['/home/apiManage/function'],
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	getUrl = () => {
		return window.location?.pathname;
	};

	render() {
		const menuKey = this.setState.menuKey || this.getUrl();
		return (
			<Layout className="layout">
				<Header
					style={{
						background: '#000',
						color: '#fff',
						fontSize: 20,
						marginLeft: -20,
					}}
				>
					后端自动化可视化工具集
				</Header>
				<Layout className="site-layout">
					<Sider
						trigger={null}
						collapsible
						collapsed={this.state.collapsed}
						style={{ background: '#fff' }}
					>
						<div className="logo" />
						<Menu
							theme="linght"
							mode="inline"
							selectedKeys={[menuKey]}
							onClick={(e) => {
								this.setState({
									menuKey: e.key,
								});
							}}
						>
							{_.map(homeMenus, (item, index) => {
								const { children, title } = item;
								return (
									<Menu.SubMenu title={title} key={index}>
										{_.map(children, (child) => {
											console.log('child', child);
											return (
												<Menu.Item key={child?.key}>
													<Link to={child?.key}>
														<span>
															{child?.title}
														</span>
													</Link>
												</Menu.Item>
											);
										})}
									</Menu.SubMenu>
								);
							})}
						</Menu>
					</Sider>
					<Content>
						<Routes>
							<Route
								path="/apiManage/*"
								element={<ApiManageMent />}
							/>
							<Route
								path="/dataManage/*"
								element={<DataManageMent />}
							/>
							<Route
								path="/process/*"
								element={<ProcessList />}
							/>
							<Route
								exact
								path="*"
								element={<Navigate to="/apiManage/*" />}
							/>
						</Routes>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Home;
