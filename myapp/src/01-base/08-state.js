import React, { Component } from 'react'

export default class App extends Component {
    // state = {
    //     text: '收藏',
    //     myshow: true,
    // }
    constructor() {
        super()
        //第二种定义方式
        this.state = {
            myshow: 'true',
            myname: 'yanwei',
        }
    }
  render() {
    return (
      <div>
        <h1>欢迎来到React-{this.state.myname}</h1>
        <button onClick={()=>{
            this.setState({
                myshow: !this.state.myshow,
                myname: 'xiaoming',
            })
        }}>{this.state.myshow?'收藏':'取消收藏'}</button>
      </div>
    )
  }
}
