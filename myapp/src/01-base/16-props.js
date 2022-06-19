import React, { Component } from 'react'
import Navbar from './navBar'

export default class App extends Component {
  render() {
      let prosObj = {
          title: '父组件',
          leftShow: true,
      }
    return (
      <div>
        <div>
            <h2>首页</h2>
            <Navbar title="首页"></Navbar>
        </div>
        <div>
            <h2>列表</h2>
            <Navbar title="列表" leftShow={false}></Navbar>
        </div>
        <div>
            <h2>购物车</h2>
            <Navbar title="购物车" rightShow={true}></Navbar>
        </div>
        {/* 传对象 */}
        <Navbar {...prosObj}></Navbar>
      </div>
    )
  }
}
