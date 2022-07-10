import React, { Component,useState,useEffect } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import {connect} from 'react-redux'
import {NavBar,Space} from 'antd-mobile'
import { SearchOutline, MoreOutline } from 'antd-mobile-icons'


function Cinemas(props) {
  let {list, getCinemaListAction} = props
  useEffect(() => {
    if(list.length == 0) {
      //后台取数据
      //actionCreator 中取数据。
      getCinemaListAction()
    }else {
      console.log('缓存', list)
    }
  }, [list, getCinemaListAction])
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline onClick={()=>{
          props.history.push('/cinemas/search')
        }}/>
        <MoreOutline />
      </Space>
    </div>
  )
  const left = (
    <div onClick={()=>{
      props.history.push('/city')
    }}>{props.cityName}</div>
  )
  return (
    <div>
      <div style={{overflow:'hidden'}}>
        {/* <div onClick={()=>{
          props.history.push('/city')
        }} style={{float:'left'}}>{props.cityName}</div>
        <div style={{float:'right'}} onClick={()=>{
          props.history.push('/cinemas/search')
        }}>搜索</div> */}
        <NavBar right={right} back={null} left={left}>
          标题
        </NavBar>
      </div>
      <ul>
        {props.list.map(item =>
            <dl key={item.cinemaId} style={{padding:'10px'}}>
                <dt>
                    {item.name}
                </dt>
                <dd style={{fontSize:'12px',color:'gray'}}>
                    {item.address}
                </dd>
            </dl>
        )}
      </ul>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return {
    list: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName,
  }
}
const mapDispatchToProps = {
  getCinemaListAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Cinemas)