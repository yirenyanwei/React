import React, { Component } from 'react'

export default class App extends Component {
    myRef = React.createRef()
    state = {
        list: [
            {
                id:'1',
                text:'aaa'
            },
            {
                id:'2',
                text:'bbb'
            },
            {
                id:'3',
                text:'ccc'
            }
        ]
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}></input>
        <button onClick={()=>this.handleClick()}>add</button>
        <ul>
            {
                this.state.list.map((item, index)=>
                <li key={item.id}>
                    {item.text}
                    {/* button传参 */}
                    {/* <button onClick={this.handleDelClick.bind(this, index)}>del</button> */}
                    <button onClick={()=>this.handleDelClick(index)}>del</button>
                </li>
                )
            }
        </ul>
      </div>
    )
  }
  handleClick(){
    let value = this.myRef.current.value
    console.log('add', value)
    //不要直接修改状态
    //   this.state.list.push(value)
    let newList = this.state.list.slice()//深拷贝
    newList.push({
        id:Math.random().toString(36).slice(2), // 截取小数点后的字符串
        text:value,
    })
    this.setState({
        list: newList
    })
    this.myRef.current.value = ''
  }
  handleDelClick(index) {
    console.log(index)
    let newList = this.state.list.slice()
    newList.splice(index, 1)
    this.setState({
        list: newList
    })
       
  }
}
