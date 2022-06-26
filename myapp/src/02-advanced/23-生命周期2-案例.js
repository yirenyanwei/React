import React, { Component } from 'react'
import './css/clear.css'

export default class App extends Component {
    state = {
        list:[1,2,3,4,5,6,7,8,9]
    }
    myref = React.createRef()
  render() {
      console.log('render')
    return (
      <div>
        <h1>邮箱应用</h1>
        <button onClick={()=>{
            this.setState({
                list:[...[10,11,12,13,14],...this.state.list]
            })
        }}>change</button>
        <div style={{height:'200px',overflow:'auto'}} ref={this.myref}>
            <ul>
                {this.state.list.map(item=>
                    <li key={item} style={{height:'100px',background:'yellow'}}>{item}</li>
                )}
            </ul>
        </div>
      </div>
    )
  }
  getSnapshotBeforeUpdate() {
      //render之后，dom修改之前执行,初始化不执行
      console.log('getSnapshotBeforeUpdate')
      //当前容器滚动的高度和滚动的位置
      return {height:this.myref.current.scrollHeight,top:this.myref.current.scrollTop}
  }
  componentDidUpdate(prevProps,prevState,value){
      //value为getSnapshotBeforeUpdate返回的参数
    console.log('componentDidUpdate',value)
    let newHeight = this.myref.current.scrollHeight
    this.myref.current.scrollTop = value.top+newHeight-value.height
  }
}
