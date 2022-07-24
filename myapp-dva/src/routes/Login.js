import React, { Component } from 'react'
import request from '../utils/request'

export default class Login extends Component {
  username = React.createRef('')
  password = React.createRef('')

  render() {
    return (
      <div>
        用户名:
        <input type='text' ref={this.username}></input>
        <br></br>
        密码:
        <input type='password' ref={this.password}></input>
        <br></br>
        <button onClick={()=>{
          request('/users/login', {
            method:'POST',
            body:JSON.stringify({
              username:this.username.current.value,
              password:this.password.current.value
            }),
            headers: {
              'Content-Type':'application/json'
            }
          }).then(res=>{
            console.log(res.data)
            localStorage.setItem('token', '123')
            this.props.history.push('/center')
          })
        }}>登录</button>
      </div>
    )
  }
}
