import React, { Component } from 'react'
import store from './redux/store'
// import './01-生成器'
// import './02-可执行生成器'
export default class App extends Component {
    state = {
        list:store.getState().list1,
        list2:store.getState().list2,
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            if(store.getState().list1.length == 0) {
                //dispatch
                store.dispatch({
                    type:'getList1'
                })
            }else {
                console.log('缓存', store.getState().list1)
            }
        }}>saga-异步缓存</button>

        <button onClick={()=>{
            if(store.getState().list2.length == 0) {
                //dispatch
                store.dispatch({
                    type:'getList2'
                })
            }else {
                console.log('缓存', store.getState().list2)
            }
        }}>saga-异步缓存2</button>
      </div>
    )
  }
}
