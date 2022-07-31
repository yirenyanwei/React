import React from 'react'
import {NavLink} from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
  return (
    <footer>
        <ul>
            <li>
            {/* 自定义高亮名字 */}
                <NavLink to='/films' className={({isActive})=>isActive?'tabbarActive':''}>电影</NavLink>
            </li>
            <li>
                <NavLink to='/cinemas' className={({isActive})=>isActive?'tabbarActive':''}>影院</NavLink>
            </li>
            <li>
                <NavLink to='/center' className={({isActive})=>isActive?'tabbarActive':''}>我的</NavLink>
            </li>
        </ul>
    </footer>
  )
}
