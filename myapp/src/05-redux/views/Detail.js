import React, { useEffect } from 'react'
import store from '../redux/store'
import {show, hide} from '../redux/actionCreator/TabbarActionCreator'

export default function Detail(props) {
    //获取动态路由参数
    console.log(props.match.params.myid)
    // console.log(props.location.query)
    // console.log(props.location.state)

    useEffect(() => {
      console.log('create')
      //store.dispatch 
      store.dispatch(hide())
      return () => {
        console.log('destroy')
        store.dispatch(show())
      }
    }, [])
    
  return (
    <div>Detail</div>
  )
}
