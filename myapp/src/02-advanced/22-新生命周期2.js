import React, { Component } from 'react'

export default class App extends Component {
    state = {
        name:'111'
    }
  render() {
      console.log('render')
    return (
      <div>
        <button onClick={()=>{
            this.setState({name:'222'})
        }}>change</button>
        {this.state.name}
      </div>
    )
  }
  getSnapshotBeforeUpdate() {
      //render之后，dom修改之前执行,初始化不执行
      console.log('getSnapshotBeforeUpdate')
      return 100
  }
  componentDidUpdate(prevProps,prevState,value){
      //value为getSnapshotBeforeUpdate返回的参数
    console.log('componentDidUpdate',value)
  }
}
