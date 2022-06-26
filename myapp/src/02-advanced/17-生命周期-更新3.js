import React, { Component } from 'react'

class Child extends Component {
    state={title:'hhh'}
    render() {
        return (
            <div>
            child--{this.state.title}
            </div>
        )
    }
    componentWillReceiveProps(newProps) {
        //父组件改变属性时触发，还不能取得新属性
        //this.props是老属性
        //最先获得父组件传来的属性
        console.log('componentWillReceiveProps')
        this.setState({title:newProps.name})
    }
}

export default class App extends Component {
    state={name:'111'}
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({name:'222'})}}>change</button>
        <Child name={this.state.name}></Child>
      </div>
    )
  }
}
