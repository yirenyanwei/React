import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [{id:1,text:'111'},{id:2,text:'222'},{id:3,text:'333'}]
    }
  render() {
      let newList = this.state.list.map((item, index)=><li key={item.id}>{item.text}</li>)
    return (
      <div>
          <ul>
          {/* 利用map创建列表，返回的是数组，react会自动把数组join显示 */}
            {newList}
          </ul>
      </div>
    )
  }
}
