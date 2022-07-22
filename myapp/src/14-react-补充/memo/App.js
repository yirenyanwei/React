import React, { Component } from 'react'

export default class App extends Component {
    state = {
        name:'yanwei',
        title:'aaa'
    }
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={()=>{
            this.setState({name:'xiaoming'})
        }}>change</button>
        <button onClick={()=>{
            this.setState({title:'bbb'})
        }}>changeChild</button>
        {/* 有关联的数据会更新 */}
        <Child title={this.state.title}></Child>
      </div>
    )
  }
}
const Child = React.memo(()=> {
    console.log('Child')
    return (
        <div>
            Child
        </div>
    )
})
