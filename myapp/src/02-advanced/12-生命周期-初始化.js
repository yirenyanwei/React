import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super()
        //渲染之前
        //初始化数据，初始化状态等
        console.log('constructor')
    }
    UNSAFE_componentWillMount(){
        //已经废弃，用construct代替 执行一次
        console.log('componentWillMount')
    }
    componentDidMount() {
        //渲染之后，拿到真实的dom 执行一次
        //请求数据、订阅、定时器、基于dom的初始化
        console.log('componentDidMount', document.getElementsByClassName('test'))
    }
  render() {
      //渲染 执行多次
      console.log('render')
    return (
      <div className='test'>
        App
      </div>
    )
  }
}
