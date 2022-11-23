import React, { useState } from 'react'
import { Dropdown, Space, Avatar, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import classnames from 'classnames';
import { navigation } from './menus';
import './style.less';

type HeaderProps = {
  mytitle: any
};

const HeaderContent = (props: HeaderProps) => {
  const { mytitle } = props;

  return (
    <div className='headerRoot'>
      <div>{mytitle || '后端自动化可视化工具集'}</div>
      <div className='header-right'>
        <div className='navBox'>
          {
            _.map(navigation, (item: any) => {
              return (
                <Link
                  to={item.key} key={item.key}
                  className={classnames('link-item', { 'selected': window.location?.pathname.includes(item?.key) })}
                >
                  {item.title}
                </Link>
              )
            })
          }
        </div>
        <div className="loginout">
          <Dropdown
            getPopupContainer={(e) => e.parentElement!}
            overlayClassName='overlay-style'
            overlay={
              <Menu>
                <Menu.Item><Link to="/login">退出</Link></Menu.Item>
              </Menu>}
            trigger={['click']}
          >
            <Space>
              <Avatar icon={<UserOutlined />} />
              <DownOutlined />
            </Space>
          </Dropdown>

        </div>
      </div>
    </div >
  )
}
export default HeaderContent;