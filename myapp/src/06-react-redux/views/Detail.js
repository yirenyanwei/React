import React, { useEffect } from 'react'
import {show, hide} from '../redux/actionCreator/TabbarActionCreator'
import {connect} from 'react-redux'

function Detail(props) {
    //获取动态路由参数
    console.log(props.match.params.myid)
    // console.log(props.location.query)
    // console.log(props.location.state)
    const {match,hide,show} = props
    useEffect(() => {
      console.log('create', props)
      //store.dispatch 
      props.hide()
      return () => {
        console.log('destroy')
        props.show()
      }
    }, [match.params.myid,hide,show])
    
  return (
    <div>Detail</div>
  )
}
//connect(给孩子穿的属性，将来给孩子传的回调函数)
const mapDispatchToProps = {
  //会加到孩子身上
  show,
  hide
}
export default connect(null, mapDispatchToProps)(Detail)