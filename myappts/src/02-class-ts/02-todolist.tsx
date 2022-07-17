import React, { Component } from 'react'
interface IState {
    text:string,
    list:Array<string>,
}
export default class App extends Component<any,IState> {
    state = {
        text:'',
        list:[]
    }
  render() {
    return (
      <div>
          <input value={this.state.text} onChange={(evt)=>{
              this.setState({
                  text:evt.target.value
              })
          }}></input>
          <button onClick={()=>{
              console.log(this.state.text)
              let newList = [...this.state.list] as Array<string>
              newList.push(this.state.text)
              this.setState({
                  list:newList,
                  text:''
              })

          }}>add</button>
          {this.state.list.map(item=>
            <li key={item}>{item}</li>
            )}
      </div>
    )
  }
}
