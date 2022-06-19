import React, { Component } from 'react'

export default class App extends Component {
    mytext = React.createRef()
  render() {
    return (
      <div>
        <input type="text" ref={this.mytext} defaultValue="yanwei"></input>
        <button onClick={()=>{
            console.log(this.mytext.current.value)
        }}>登录</button>
        <button onClick={()=>{
            this.mytext.current.value = ''
        }}>重置</button>

        {/* 无法实时获取输入框的值，传递给子组件 */}
        {/* <Child value={this.mytext.current.value}></Child> */}
      </div>
    )
  }
}
