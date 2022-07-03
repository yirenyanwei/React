import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from './redux/store'

export default class App extends Component {
  state = {
    show:store.getState().show
  }
  //store.subscribe
  componentDidMount() {
    store.subscribe(()=>{
      console.log('app subscribe', store.getState())
      this.setState({
        show:store.getState().show
      })
    })
  }
  render() {
    return (
      <div>
        <MRouter>
          {this.state.show&&<Tabbar></Tabbar>}
        </MRouter>
      </div>
    )
  }
}
