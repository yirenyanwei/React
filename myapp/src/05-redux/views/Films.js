import React, { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import style from "./css/Film.module.css"
console.log(style)
export default class Films extends Component {
  render() {
    return (
      <div>
        <div style={{background:'yellow',height:'200px'}}>
          大轮播
        </div>
        <ul>
          <li>
            <NavLink to='/films/nowplaying' activeClassName={style.tabbarActive}>正在热映</NavLink>
          </li>
          <li>
            <NavLink to='/films/comingsoon' activeClassName={style.tabbarActive}>即将上映</NavLink>
          </li>
        </ul>
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
