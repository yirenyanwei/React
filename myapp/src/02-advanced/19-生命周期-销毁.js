import React, { Component } from 'react'

export default class App extends Component {
    state={isCreated:true}
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({isCreated:!this.state.isCreated})
        }}>destroy</button>
        {this.state.isCreated&&<Child></Child>}
      </div>
    )
  }
}
class Child extends Component {
    render() {
        return (
            <div>Child</div>
        )
    }
    componentWillUnmount(){
        //组件销毁之前调用，做清理工作
        console.log('componentWillUnmount')
    }
}
