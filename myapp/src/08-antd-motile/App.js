import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from './redux/store'
import {connect} from 'react-redux'

class App extends Component {
  //store.subscribe
  componentDidMount() {
    console.log('App', this.props)
  }
  render() {
    return (
      <div>
        <MRouter>
          {this.props.isShow&&<Tabbar></Tabbar>}
        </MRouter>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  //state是形参，往App身上传属性,属性改变会自动刷新界面
  return {
    testApp:1,
    isShow:state.TabbarReducer.show
  }
}
export default connect(mapStateToProps)(App)