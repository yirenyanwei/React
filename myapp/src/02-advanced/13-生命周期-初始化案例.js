import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list: ['111', '222', '333', '444', '555', '666']
    }
    componentDidMount() {
        new BetterScroll('#wrapper')
    }
  render() {
    return (
      <div>
        <div id='wrapper' style={{background:'yellow',height:'50px', overflow:'hidden'}}>
            <ul>
                {this.state.list.map(item=>
                    <li key={item}>{item}</li>
                )}
            </ul>
        </div>
      </div>
    )
  }
}
