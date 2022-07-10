import React, { Component } from 'react'
import { NavLink,withRouter } from 'react-router-dom'
import {TabBar} from 'antd-mobile'
import style from './Tabbar.module.css'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

class MyTabbar extends Component {
  //store.subscribe
  tabs = [
    {
      key: '/films',
      title: '电影',
      icon: <AppOutline />,
    },
    {
      key: '/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  getActiveKey() {
    let arr = this.props.location.pathname.split('/')
    return '/'+arr[1]
  }
  render() {
    return (
      <div className={style.tabbar}>
        <TabBar onChange={(value)=>{
          this.props.history.push(value)
        }} activeKey={this.getActiveKey()}>
          {this.tabs.map(item => (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
          </TabBar>
      </div>
      
    )
  }
}
export default withRouter(MyTabbar)