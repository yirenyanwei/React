import React, { Component } from 'react'

//函数式组件
const Child = ()=><div>child</div>

class Navbar extends Component{
    render() {
        return <div>
            navbar
            <Child></Child>
        </div>
    }
}

class Swiper extends Component{
    render() {
        return <div>swiper</div>
    }
}

class Tabbar extends Component{
    render() {
        return <div>tabbar</div>
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
