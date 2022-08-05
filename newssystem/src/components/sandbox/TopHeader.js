import React,{useState} from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
const { Header, Sider, Content } = Layout;
export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            111
          ),
        },
        {
          key: '2',
          label: (
            222
          ),
        },
        {
          key: '3',
          label: (
            333
          ),
        },
        {
          key: '4',
          danger: true,
          label: '退出',
        },
      ]}
    />
  );
  return (
    <div>
      <Header className="site-layout-background" style={{ padding: '0 16px' }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}

        <div style={{float:'right'}}>
          <span>欢迎admin回来</span>
          <Dropdown overlay={menu}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </Header>
    </div>
  )
}