import React, { Component } from 'react'
import IndexRouter from './router'
import store from './redux/store'

export default class App extends Component {
  state = {
    show: store.getState().isShow
  }
  componentDidMount() { 
    store.subscribe(()=>{
      this.setState({
        show: store.getState().isShow
      })
    })
   }
  render() {
    return (
      <div>
          <IndexRouter></IndexRouter>
          {this.state.show&&<ul>
              <li>电影</li>
              <li>影院</li>
              <li>我的</li>
          </ul>}
      </div>
    )
  }
}
