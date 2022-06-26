import React, { Component } from 'react'

export default class App extends Component {
    state = {
        name: 'yanwei',
        age:'20'
    }
    static getDerivedStateFromProps(nextProps, nextState){
        //初始化、更新都会执行
        //返回的对象会和state合并
        //参数是将要改变的
        console.log('getDerivedStateFromProps')
        return {
            //转化为首字母大写
            name: nextState.name.substring(0,1).toUpperCase()+nextState.name.substring(1)
        }
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({name:'xiaoming'})
        }}>change</button>
        App-{this.state.name}-{this.state.age}
      </div>
    )
  }
}
