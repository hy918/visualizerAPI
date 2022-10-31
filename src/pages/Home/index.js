import React from 'react';
import {Layout, Menu} from 'antd';
import {Link, Routes, Route, Navigate} from 'react-router-dom';

import List1 from './List1';
import List2 from './List2';
import List from './Process/List'
import ProcessNodeList from "./Process/Node";
import ProcessSideList from "./Process/Side";
import ProcessHistoryList from "./Process/History";
import DataTableLocalList from "./Table/Local";
import DataTableNewImportList from "./Table/Import";
import ApiDetail from './ApiDetails';

import './index.less';

const {Sider, Content, Header} = Layout;

// const { SubMenu } = Menu;

class Home extends React.Component {
    state = {
        collapsed: false,
        visible: false,
        menuKey: ['/home/list1'],
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
                        style={{background: '#fff'}}
                    >
                        <div className="logo"/>
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
                            {/*<Menu.Item>基础-功能API管理</Menu.Item>*/}
                            <Menu.SubMenu title="基础-功能API管理">
                                <Menu.Item key="/home/list1">
                                    <Link to="/home/list1">
                                        <span>功能API管理</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="/home/list2">
                                    <Link to="/home/list2">
                                        <span>基础API管理</span>
                                    </Link>
                                </Menu.Item>
                            </Menu.SubMenu>

                            <Menu.SubMenu title="流程可视化配置">
                                <Menu.Item key="/home/process">
                                    <Link to="/home/process">
                                        <span>流程树管理</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="/home/processnode">
                                    <Link to="/home/processnode">
                                        <span>流程节点管理</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="/home/processside">
                                    <Link to="/home/processside">
                                        <span>流程边管理</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="/home/processhis">
                                    <Link to="/home/processhis">
                                        <span>流程历史管理</span>
                                    </Link>
                                </Menu.Item>
                            </Menu.SubMenu>

                            <Menu.SubMenu title="数据表管理">
                                <Menu.Item key="/home/importtable">
                                    <Link to="/home/importtable">
                                        <span>导入建表语句</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="/home/localconnect">
                                    <Link to="/home/localconnect">
                                        <span>本连接的所有表管理</span>
                                    </Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                            {/*<Menu.Item key="/home/list1">*/}
                            {/*	<Link to="/home/list1">*/}
                            {/*		<span>功能API管理</span>*/}
                            {/*	</Link>*/}
                            {/*</Menu.Item>*/}
                            {/*<Menu.Item key="/home/list2">*/}
                            {/*	<Link to="/home/list2">*/}
                            {/*		<span>基础API管理</span>*/}
                            {/*	</Link>*/}
                            {/*</Menu.Item>*/}
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
                    <Content>
                        <Routes>
                            <Route path="/list1" element={<List1/>}/>
                            <Route path="/list2" element={<List2/>}/>
                            <Route path="/process" element={<List/>}/>
                            <Route path="/processnode" element={<ProcessNodeList/>}/>
                            <Route path="/processside" element={<ProcessSideList/>}/>
                            <Route path="/processhis" element={<ProcessHistoryList/>}/>
                            <Route path="/localconnect" element={<DataTableLocalList/>}/>
                            <Route path="/importtable" element={<DataTableNewImportList/>}/>
                            <Route path="/apiDetail" element={<ApiDetail/>}/>
                            <Route
                                exact
                                path="*"
                                element={<Navigate to="/list1"/>}
                            />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;
