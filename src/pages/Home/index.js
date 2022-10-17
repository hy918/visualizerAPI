import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Routes, Route } from 'react-router-dom';

import List1 from './List1';
import List2 from './List2';
import './index.less';
const { Sider, Content } = Layout;
// const { SubMenu } = Menu;

class Home extends React.Component {
	state = {
		collapsed: false,
		visible: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout className="layout">
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
				>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={['/home/list1']}
					>
						<Menu.Item key="/home/list1">
							<Link to="/home/list1">
								<span>列表1</span>
							</Link>
						</Menu.Item>
						<Menu.Item key="/home/list2">
							<Link to="/home/list2">
								<span>列表2</span>
							</Link>
						</Menu.Item>
						{/* <SubMenu key="g6" icon={<BugOutlined />} title="G6">
							<Menu.Item key="/page/G6">
								<Link to="/page/G6">
									<StarOutlined />
									<span>画图1</span>
								</Link>
							</Menu.Item>
						</SubMenu> */}
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Content>
						<Routes>
							<Route path="/list1" element={<List1 />} />
							<Route path="/list2" element={<List2 />} />
						</Routes>
						{/* hhhhh */}
					</Content>
				</Layout>
			</Layout>
		);
	}
}
export default Home;
