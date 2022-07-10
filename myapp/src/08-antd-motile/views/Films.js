import React, { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import style from "./css/Film.module.css"
import {Swiper,Tabs} from 'antd-mobile'
import axios from 'axios'
export default class Films extends Component {
  state = {
    loopList: []
  }
  stickyTabs = {
    position: 'sticky',
    top: '0',
    background:'white',
    zIndex: '2'
  }
  componentDidMount() {
    axios.get('./json/banner.json').then(res=>{
      this.setState({
        loopList: res.data.data
      })
    })
  }
  getItems() {
    return this.state.loopList.map(item=>
        <Swiper.Item key={item.bannerId}>
          <img src={item.imgUrl} alt={item.name} style={{width:'100%'}}></img>
        </Swiper.Item>
      )
  }
  onChange(key) {
    this.props.history.push(key)
  }
  render() {
    return (
      <div>
        {/* 轮播 */}
        {this.state.loopList.length&&<Swiper autoplay={true} loop={true}>
          {this.getItems()}
        </Swiper>}
        {/* 电影列表 */}
        {/* <ul>
          <li>
            <NavLink to='/films/nowplaying' activeClassName={style.tabbarActive}>正在热映</NavLink>
          </li>
          <li>
            <NavLink to='/films/comingsoon' activeClassName={style.tabbarActive}>即将上映</NavLink>
          </li>
        </ul> */}
        <div style={this.stickyTabs}>
          <Tabs onChange={(key)=>this.onChange(key)} activeKey={this.props.location.pathname}>
            <Tabs.Tab title='正在热映' key='/films/nowplaying'>
            </Tabs.Tab>
            <Tabs.Tab title='即将上映' key='/films/comingsoon'>
            </Tabs.Tab>
          </Tabs>
        </div>
        {/* 路由配置 嵌套路由 */}
        <Switch>
          <Route path='/films/nowplaying' component={Nowplaying}></Route>
          <Route path='/films/comingsoon' component={Comingsoon}></Route>
          <Redirect from='/films' to='/films/nowplaying'></Redirect>
        </Switch>
      </div>
    )
  }
}
