import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './index.css'
const { Header, Sider, Content } = Layout;
function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  function onClickMenu({key, keyPath, domEvent }){
    props.history.push(key)
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >全球新闻发布管理系统</div>
      <Menu
        onClick={(params)=>onClickMenu(params)}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '/home',
            icon: <UserOutlined />,
            label: '首页',
          },
          {
            key: '/user-manage',
            icon: <VideoCameraOutlined />,
            label: '用户管理',
            children:[
              {
                key: '/user-manage/list',
                icon: <VideoCameraOutlined />,
                label: '用户列表',
              }
            ]
          },
          {
            key: '/right-manage',
            icon: <VideoCameraOutlined />,
            label: '权限管理',
            children:[
              {
                key: '/right-manage/role/list',
                icon: <VideoCameraOutlined />,
                label: '角色列表',
              },
              {
                key: '/right-manage/right/list',
                icon: <VideoCameraOutlined />,
                label: '权限列表',
              }
            ]
          },
        ]}
      />
    </Sider>
  )
}
export default withRouter(SideMenu)