import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuoComponent/Film'
import Cinema from './maizuoComponent/Cinema'
import Center from './maizuoComponent/Center'

export default class App extends Component {
    state = {
        list: [
            {id:1,text:'电影'},
            {id:2,text:'影院'},
            {id:3,text:'我的'},
        ],
        current: 0,
    }
    getCurrentComponent(){
        let components = [
            <Film></Film>,
            <Cinema></Cinema>,
            <Center></Center>
        ]
        return components[this.state.current]
    }
  render() {
    return (
      <div>
        {this.getCurrentComponent()}
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
  }
}
