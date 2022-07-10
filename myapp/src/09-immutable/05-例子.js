import React, { Component } from 'react'
import {Map, List} from 'immutable'

export default class App extends Component {
    state = {
        info: Map({
            name:'yanwei',
            location: Map({
                province:'bj',
                city:'北京'
            }),
            favour:List(['1','2','3'])
        })
    }
  render() {
    return (
      <div>
        <h1>个人信息</h1>
        {
            this.state.info.get('name')
        }
        -
        {
            this.state.info.get('location').get('city')
        }
        <br></br>
        {
            this.state.info.get('favour').map(item=>
                <li key={item}>{item}</li>
            )
        }
      </div>
    )
  }
}
