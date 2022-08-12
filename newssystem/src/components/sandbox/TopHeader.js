import React,{useState} from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { withRouter } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
function TopHeader(props) {
  const [collapsed, setCollapsed] = useState(false);
  const user = JSON.parse(localStorage.getItem('token'))
  const menu = (
    <Menu
      onClick={(params) => onClickMenu(params)}
      items={[
        {
          key: '1',
          label: user.role.roleName,
        },
        {
          key: '2',
          danger: true,
          label: '退出',
        },
      ]}
    />
  );
  function onClickMenu( {key, keyPath, domEvent }) {
    if(key == '2') {
      //退出
      localStorage.removeItem('token')
      props.history.replace('/login')
    }
  }
  return (
    <div>
      <Header className="site-layout-background" style={{ padding: '0 16px' }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}

        <div style={{float:'right'}}>
          <span>欢迎{user.username}回来</span>
          <Dropdown overlay={menu}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </Header>
    </div>
  )
}
export default withRouter(TopHeader)