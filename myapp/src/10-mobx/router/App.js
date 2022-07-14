import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import {autorun} from 'mobx'
import './views/css/App.css'
import store from './mobx/store6'
import {observer} from 'mobx-react'

class App extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
    console.log(this.props, 'hahahhahahahah')
  }
  render() {
    return (
      <div>
        <MRouter>
          {this.props.isTabbarShow&&<Tabbar></Tabbar>}
        </MRouter>
      </div>
    )
  }
}

//被`observer`包裹的函数式组件会被监听在它每一次调用前发生的任何变化
const View = observer(({ store }) =>{
  return <App isTabbarShow = {store.isTabbarShow}></App>
})

export default View
