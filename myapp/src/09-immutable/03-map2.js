import React, { Component } from 'react'

export default class App extends Component {
    state = {
        info:{
            name:'yanwei',
            filter: {text:'aa',up:true}
        }
    }
  render() {
    return (
      <div>App</div>
    )
  }
}
