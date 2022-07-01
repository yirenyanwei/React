import React, { Component, useEffect } from 'react'

export default class App extends Component {
    state={isCreated:true}
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({isCreated:!this.state.isCreated})
        }}>destroy</button>
        {this.state.isCreated&&<Child></Child>}
      </div>
    )
  }
}
class Child1 extends Component {
    componentDidMount() {
        this.entry = setInterval(()=>{
            console.log('Interval')
        }, 1000)
    }
    render() {
        return (
            <div>Child</div>
        )
    }
    componentWillUnmount(){
        //组件销毁之前调用，做清理工作
        console.log('componentWillUnmount')
        clearInterval(this.entry)
    }
}

function Child() {
    useEffect(()=>{
        //函数体（初始化会调用）
        let entry = setInterval(()=>{
            console.log('Interval')
        }, 1000)
        return ()=>{
            //组件销毁
            clearInterval(entry)
        }
    }, [])//[监听变量，变量变化则函数体调用]
    return (
        <div>
            Child
        </div>
    )
}
