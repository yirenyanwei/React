import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from './redux/store'

export default class App extends Component {
  state = {
    show:store.getState().TabbarReducer.show
  }
  //store.subscribe
  componentDidMount() {
    store.subscribe(()=>{
      this.setState({
        show:store.getState().TabbarReducer.show
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
