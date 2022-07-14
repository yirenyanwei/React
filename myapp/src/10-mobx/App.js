import React, { Component } from 'react'
import {observable,autorun} from 'mobx'

//1对于普通数据类型的监听
let observableNum = observable.box(10)
let observableName = observable.box('yanwei')
//第一次执行一次，以后每次改变会执行
autorun(()=>{
  //只有用到的变量才会监听
  console.log(observableNum.get())
})
autorun(()=>{
  console.log('name-', observableName.get())
})
//异步修改
setTimeout(()=>{
  observableNum.set(20)
}, 1000)
setTimeout(()=>{
  observableName.set('xiaoming')
}, 1500)

/** 
//2对象监听
let myobj = observable.map({
  name:'yanwei',
  age:'20'
})
autorun(()=>{
  //只监听name属性
  console.log('name改变', myobj.get('name'))
})
setTimeout(()=>{
  // myobj.set('age', 21)
  myobj.set('name', 'xiaoming')
}, 3000)
*/
//2.2对象监听
let myobj2 = observable({
  name:'yanwei',
  age:'20'
})
autorun(()=>{
  //只监听name属性
  console.log('name改变2.2', myobj2.name)
})
setTimeout(()=>{
  myobj2.name = 'xiaoming'
}, 3000)


export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
