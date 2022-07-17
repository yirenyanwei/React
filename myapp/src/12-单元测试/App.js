import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list:['111','222'],
        text:''
    }
  render() {
    return (
      <div>
        <h1>todolist</h1>
        <input onChange={(evt)=>{
            this.setState({
                text:evt.target.value
            })
        }}></input>
        <button onClick={()=>{
            let newList = [...this.state.list]
            newList.push(this.state.text)
            this.setState({
                list:newList
            })
        }}>add</button>
        <ul>
            {this.state.list.map((item,idx)=>
                <li key={item}>{item}
                    <button onClick={()=>{
                        let newList = [...this.state.list]
                        newList.splice(idx, 1)
                        this.setState({
                            list:newList
                        })
                    }}>del</button>
                </li>
            )}
        </ul>
      </div>
    )
  }
}
