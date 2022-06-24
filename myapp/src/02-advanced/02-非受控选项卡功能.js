import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuoComponent/Film'
import Cinema from './maizuoComponent/Cinema'
import Center from './maizuoComponent/Center'
import Tabbar from './maizuoComponent/Tabbar'
import Navbar from './maizuoComponent/Navbar'

export default class App extends Component {
    state = {
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
        <Navbar event={()=>{
            console.log('click center')
            this.setState({current:2})
        }}></Navbar>
        {this.getCurrentComponent()}
        <Tabbar event={(index)=>{
            this.setState({
                current: index
            })
        }}></Tabbar>
      </div>
    )
  }
}
