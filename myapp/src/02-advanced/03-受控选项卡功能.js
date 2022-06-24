import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuoComponent2/Film'
import Cinema from './maizuoComponent2/Cinema'
import Center from './maizuoComponent2/Center'
import Tabbar from './maizuoComponent2/Tabbar'
import Navbar from './maizuoComponent2/Navbar'

export default class App extends Component {
    state = {
        current: 0,
        list: [
            {id:1,text:'电影'},
            {id:2,text:'影院'},
            {id:3,text:'我的'},
        ],
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
        <Navbar event={()=>{
            console.log('click center')
            this.setState({current:2})
        }}></Navbar>
        {this.getCurrentComponent()}
        <Tabbar event={(index)=>{
            this.setState({
                current: index
            })
        }} current={this.state.current} list={this.state.list}></Tabbar>
      </div>
    )
  }
}
