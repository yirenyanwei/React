import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state = {
    myname: 'xiaoming',
    list: []
  }
  componentDidMount(){
    axios.get('/json/maizuo.json').then(res=>{
      this.setState({list:res.data.data.films})
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={()=>{this.setState({myname:'tiechui'})}}>change</button>
        {this.state.myname}
        <div id="wraper" style={{background:'yellow',overflow:'hidden',height:'200px'}}>
          <ul>
            {this.state.list.map(item=>
              <li key={item.filmId}>{item.name}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
  UNSAFE_componentWillUpdate(){
    //废弃了 同理componentWillMount
    //render更新之前 首次不会执行
    console.log('componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    //render更新之后，可以访问dom 首次不会执行
    //更新后想要获取dom
    console.log('componentDidUpdate')
    if(prevState.list.length == 0) {
      //只执行一次
      new BetterScroll('#wraper')
    }
  }
}
