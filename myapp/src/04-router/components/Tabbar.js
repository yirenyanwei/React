import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default class Tabbar extends Component {
  //store.subscribe
  render() {
    return (
      <div className={style.tabbar}>
        <ul>
            <li>
                {/* activeClassName 选中时的类名 */}
                <NavLink to='/films' activeClassName={style.tabbarActive}>电影</NavLink>
            </li>
            <li>
                <NavLink to='/cinemas' activeClassName={style.tabbarActive}>影院</NavLink>
            </li>
            <li>
                <NavLink to='/center' activeClassName={style.tabbarActive}>我的</NavLink>
            </li>
        </ul>
      </div>
    )
  }
}
