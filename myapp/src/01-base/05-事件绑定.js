import React, { Component } from 'react'

export default class App extends Component {
    a = 100
  render() {
    return (
      <div id="testevent">
        <input type="text"></input>
        {/* 点击事件 4中回调方式*/}
        <button onClick={()=>{
            //this指向APP  箭头函数，跟外边的this相同
            console.log('click1', this)
        }}>add</button>
        <button onClick={this.handleClick2.bind(this)}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button onClick={()=>{
            this.handleClick4()
        }}>add4</button>
        <button>add5</button>
      </div>
    )
  }
  //成员函数
  handleClick2() {
      //this指向undefined，修正方式.bind(this)
      console.log('click2', this)
  }
  //定义成员变量 es7写法
  handleClick3 = (evt)=>{
      //this 指向APP
    console.log('click3', this, evt)
    // document.querySelector('#testevent').addEventListener('click', function(e){
    //     console.log(e.target, e.currentTarget)
    // })
  }

  handleClick4 (){
      //this执行APP
    console.log('click4', this)
  }
}