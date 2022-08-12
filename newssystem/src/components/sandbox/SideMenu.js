import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './index.css'
import axios from 'axios';
const { Header, Sider, Content } = Layout;
function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [newsMenu, setNewsMenu] = useState([])
  // console.log('sidemenu:', props.location)
  const selectedKeys = [props.location.pathname]
  const openKeys = ['/'+props.location.pathname.split('/')[1]]
  //图标映射表
  const iconList = {
    '/home': <UserOutlined />,
    '/user-manage': <VideoCameraOutlined />,
    '/user-manage/list': <VideoCameraOutlined />,
    '/right-manage': <VideoCameraOutlined />,
    '/right-manage/role/list': <VideoCameraOutlined />,
    '/right-manage/right/list': <VideoCameraOutlined />,
  }
  const user = JSON.parse(localStorage.getItem('token'))//当前登录用户
  function onClickMenu({ key, keyPath, domEvent }) {
    props.history.push(key)
  }

  function checkPagePermisson(item) {
    //检查权限
    let rights = user.role.rights
    return item.pagepermisson && rights.includes(item.key)
  }
  function transformData(menus) {
    let root = []
    let backtrack = function (originArr, newArr) {
      for (let i = 0; i < originArr.length; i++) {
        let menu = originArr[i]
        //检查权限
        if (checkPagePermisson(menu)) {
          let data = {
            key: menu.key,
            icon: iconList[menu.key] || <UserOutlined />,
            label: menu.title
          }
          newArr.push(data)
          if (menu.children) {
            data.children = []
            backtrack(menu.children, data.children)
            if (data.children.length == 0) {
              delete data.children
            }
          }
        }
      }
    }
    backtrack(menus, root)
    return root
  }
  useEffect(() => {
    axios.get('http://localhost:8000/rights?_embed=children').then(res => {
      console.log(res.data)
      setNewsMenu(transformData(res.data))
    })
  }, [])
  /*
  [
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
        ]
  */
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div className="logo" >全球新闻发布管理系统</div>
        <div style={{flex:1, overflow:'auto'}}>
          <Menu
            onClick={(params) => onClickMenu(params)}
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            defaultOpenKeys = {openKeys}
            items={newsMenu}
          />
        </div>
      </div>
    </Sider>
  )
}
export default withRouter(SideMenu)