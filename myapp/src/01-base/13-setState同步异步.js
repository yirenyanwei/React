import React, { Component } from 'react'
import { flushSync } from 'react-dom';

export default class App extends Component {
    state = {
        count: 0
    }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>add2</button>
      </div>
    )
  }
  handleAdd1 = ()=>{
      this.setState({
          count: this.state.count+1
      }, ()=>{
        console.log('updated', this.state.count)
      })
      console.log(this.state.count)
      this.setState({
          count: this.state.count+1
      }, ()=>{
        console.log('updated', this.state.count)
      })
      console.log(this.state.count)
      //执行完两边之后整体会+1，为了性能考虑，会合并状态，在下一帧处理任务
  }
  handleAdd2 = ()=>{
    flushSync(()=>{
        this.setState({
            count: this.state.count+1
        })
    })
    console.log(this.state.count)
    flushSync(()=>{
        this.setState({
            count: this.state.count+1
        })
    })
    console.log(this.state.count)
    //flushSync前置刷新dom
    }
}
