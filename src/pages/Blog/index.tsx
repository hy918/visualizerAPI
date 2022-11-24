import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import _ from 'lodash';

import HeaderContent from '@/components/HeaderContent';
import Account from './Account';
import ManageCenter from './Manage';
import EditAticle from './Write';
import MAaterial from './Material';

import { blogMenus } from './menus';
import './index.less';

const { Sider, Content, Header } = Layout;

class Blog extends React.Component {
  state = {
    collapsed: false,
    visible: false,
    menuKey: '',
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
    const menuKey = this.state.menuKey || this.getUrl();
    return (
      <Layout className="layout">
        <Header
          style={{
            color: '#fff',
            fontSize: 18,
          }}
        >
          <HeaderContent mytitle="我的博客" />
        </Header>
        <Layout className="site-layout">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ background: '#fff' }}>
            <div className="logo" />
            <Menu
              // theme="light"
              mode="inline"
              selectedKeys={[menuKey]}
              onClick={(e) => {
                this.setState({
                  menuKey: e.key,
                });
              }}
            >
              {_.map(blogMenus, (item: any, index: number) => {
                const { children, title, key } = item;
                return (
                  <>
                    {
                      _.isEmpty(children) ?
                        <Menu.Item key={key}>
                          <Link to={key}>
                            <span>{title}</span>
                          </Link>
                        </Menu.Item>
                        :
                        <Menu.SubMenu title={title} key={index}>
                          {_.map(children, (child: any) => {
                            return (
                              <Menu.Item key={child?.key}>
                                <Link to={child?.key}>
                                  <span>{child?.title}</span>
                                </Link>
                              </Menu.Item>
                            );
                          })}
                        </Menu.SubMenu>
                    }
                  </>
                );
              })}
            </Menu>
          </Sider>
          <Content>
            <Routes>
              <Route path="/account/*" element={<Account />} />
              <Route path="/manage/*" element={<ManageCenter />} />
              <Route path='/write' element={<EditAticle />} />
              <Route path='/material' element={<MAaterial />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Blog;
