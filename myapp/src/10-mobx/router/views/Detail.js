import React, { useEffect } from 'react'
import store from '../mobx/store6'

export default function Detail(props) {
    //获取动态路由参数
    console.log(props.match.params.myid)
    // console.log(props.location.query)
    // console.log(props.location.state)

    useEffect(() => {
      console.log('create')
      //store.dispatch 
      // store.isTabbarShow = false
      store.changeHide()
      return () => {
        console.log('destroy')
        // store.isTabbarShow = true
        store.changeShow()
      }
    }, [])
    
  return (
    <div>Detail</div>
  )
}
