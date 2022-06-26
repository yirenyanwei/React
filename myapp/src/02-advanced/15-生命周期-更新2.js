import React, { Component } from 'react'

export default class App extends Component {
    state={
        myname:'yanwei'
    }
  render() {
      console.log('render')
    return (
      <div>
      <button onClick={()=>{
          this.setState({myname:'weiwei'})
      }}>change</button>
      {this.state.myname}
      </div>
    )
  }
  shouldComponentUpdate(newProps, newState){
      //组件是否更新 参数是新设置的状态
      //阻止 render
      //this.state.myname 是老的状态
      if(this.state.myname==newState.myname) {
          //提高性能
          return false
      }
      return true
  }
  UNSAFE_componentWillUpdate() {
      console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
}
}
