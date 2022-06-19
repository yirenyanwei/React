import React, { Component } from 'react'
import Navbar from './navBar' 
import Sidebar from './sideBar'

export default class App extends Component {
  render() {
    return (
      <div>
          {/* 组件式 */}
          <Navbar title="导航栏"></Navbar>
          {/* 函数式 */}
          <Sidebar bg="red" position="right"></Sidebar>
      </div>
    )
  }
}
