import React, { Component } from 'react'

class Child extends Component{
    render() {
        return (
            <div>
                child-{this.props.text}
                <button onClick={()=>{
                    this.props.text = '123'
                }}>click-子</button>
                
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        text: 'abc'
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                text:'def'
            })
        }}>click</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}
