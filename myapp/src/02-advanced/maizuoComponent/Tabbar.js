import React, { Component } from 'react'

export default class Tabbar extends Component {
    state = {
        current: 0,
        list: [
            {id:1,text:'电影'},
            {id:2,text:'影院'},
            {id:3,text:'我的'},
        ],
    }
  render() {
    return (
      <div>
        <ul>
            {this.state.list.map((item,index)=>
            <li key={item.id} className={this.state.current==index?"active":''} onClick={()=>{
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
    this.setState({
        current: index
    })
    this.props.event(index)
}
}
