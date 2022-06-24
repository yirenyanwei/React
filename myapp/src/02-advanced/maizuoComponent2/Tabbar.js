import React, { Component } from 'react'

export default class Tabbar extends Component {
    state = {
      //无状态设计，由父组件控制
    }
  render() {
    return (
      <div>
        <ul>
            {this.props.list.map((item,index)=>
            <li key={item.id} className={this.props.current==index?"active":''} onClick={()=>{
                this.handleClickTab(index)
            }}>
                {item.text}
            </li>
            )}
        </ul>
      </div>
    )
  }
  handleClickTab(index) {
    this.props.event(index)
}
}
