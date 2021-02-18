import React from 'react';
import { Menu } from 'antd'
import { HomeOutlined, TeamOutlined, NotificationOutlined, SettingOutlined } from '@ant-design/icons'


function HeaderMenu() {
  return (
    <Menu theme="light" mode="horizontal" style={{ display: 'inline-block', float: 'right', boxSizing: 'border-box' }}>
      <Menu.Item key="1" icon={<HomeOutlined />}>首页</Menu.Item>
      <Menu.Item key="2" icon={<TeamOutlined />}>我的团队</Menu.Item>
      <Menu.Item key="3" icon={<NotificationOutlined />}>我的通知</Menu.Item>
      <Menu.Item key="4" icon={<SettingOutlined />}>设置</Menu.Item>
    </Menu>
  )
}

export default HeaderMenu;