import React, { Component } from 'react'

export default class App extends Component {
    state = {
        mytext: 'yanwei'
    }
  render() {
    return (
      <div>
      {/* onChange 和 onInput的效果一样 */}
        <input type="text" value={this.state.mytext} onChange={(evt)=>{
            this.setState({
                mytext:evt.target.value
            })
        }}></input>
        <button onClick={()=>{
            console.log(this.state.mytext)
        }}>登录</button>
        <button onClick={()=>{
            this.setState({
                mytext:''
            })
        }}>重置</button>
        {/* <Child value={this.state.mytext}></Child> */}
      </div>
    )
  }
}
