import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list: []
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.getData()}>addData</button>
        <div className="wrapper" style={{height:'200px', backgroundColor: 'yellow', overflow:'hidden'}}>
            <ul className="content">
                {this.state.list.map(item=>
                    <li key={item}>{item}</li>
                )}
            </ul>
        {/* <!-- 这里可以放一些其它的 DOM，但不会影响滚动 --> */}
        </div>
      </div>
    )
  }
  getData() {
      let list = []
      for(let i = 0; i<20; i++) {
          list.push(i)
      }
      this.setState({
          list
      }, ()=>{
        let scroll = new BetterScroll('.wrapper')
      })
  }
}
