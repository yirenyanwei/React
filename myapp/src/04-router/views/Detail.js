import React, { useEffect } from 'react'

export default function Detail(props) {
    //获取动态路由参数
    console.log(props.match.params.myid)
    // console.log(props.location.query)
    // console.log(props.location.state)

    useEffect(() => {
      console.log('create')
      //store.dispatch 
      return () => {
        console.log('destroy')
      }
    }, [])
    
  return (
    <div>Detail</div>
  )
}
