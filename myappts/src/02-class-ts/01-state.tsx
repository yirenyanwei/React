import React, { Component } from 'react'

interface IState {
    name:string
}
//Component<约束属性，约束状态>
export default class App extends Component<any,IState> {
    state = {
        name:'yanwei',
        age: 20
    }
  render() {
    return (
      <div>
          {this.state.name}
          <button onClick={()=>{
              this.setState({
                  name:'xiaoming'
              })
          }}>change</button>
      </div>
    )
  }
}
