import React, { Component } from 'react'

class Field extends Component {
    render() {
        return (
            <div style={{background:'yellow'}}>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(evt)=>{
                    this.props.onChange(evt.target.value)
                }} value={this.props.value}></input>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        username: 'yanwei',
        password: '123'
    }
  render() {
    return (
      <div>
        <h1>登录界面</h1>
        <Field label="用户名" type="text" onChange={(value)=>{
            this.setState({username:value})
        }} value={this.state.username}></Field>
        <Field label="密码" type="password" onChange={(value)=>{
            this.setState({password:value})
        }} value={this.state.password}></Field>
        <button onClick={()=>{
            console.log(this.state.username, this.state.password)
        }}>登录</button>
        <button onClick={()=>{
            this.setState({
                username: '',
                password: ''
            })
        }}>取消</button>
      </div>
    )
  }
}
