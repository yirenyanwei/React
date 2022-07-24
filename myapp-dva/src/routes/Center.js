import React, { Component } from 'react'
import { withRouter } from 'dva/router'
import request from '../utils/request'

export default class Center extends Component {
  componentDidMount() { 
    //异步
    request('/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4').then(res=>{
      console.log(res.data)
    })

    //mock
    request('/users').then(res=>{
      console.log(res.data)
    })
   }
  render() {
    return (
      <div>
        <WithChild></WithChild>
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{
          console.log(this.props)
          localStorage.removeItem('token')
          this.props.history.push('/login')
        }}>退出</button>
      </div>
    )
  }
}
//传递路由
const WithChild = withRouter(Child)