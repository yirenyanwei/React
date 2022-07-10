import React, { Component,useState,useEffect } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Cinemas(props) {
  const [cityName, setCityName] = useState(store.getState().CityReducer.cityName)
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)
  useEffect(() => {
    let list = store.getState().CinemaListReducer.list
    if(list.length == 0) {
      //后台取数据
      //actionCreator 中取数据。
      store.dispatch(getCinemaListAction())
    }else {
      console.log(list)
    }
    //subscribe
    var unsubscribe = store.subscribe(()=>{
      console.log('cinema subscribe')
      setCinemaList(store.getState().CinemaListReducer.list)
    })
    return () => {
      //取消订阅
      unsubscribe()
    }
  }, [])
  
  return (
    <div>
      <div style={{overflow:'hidden'}}>
        <div onClick={()=>{
          props.history.push('/city')
        }} style={{float:'left'}}>{cityName}</div>
        <div style={{float:'right'}} onClick={()=>{
          props.history.push('/cinemas/search')
        }}>搜索</div>
      </div>
      <ul>
        {cinemaList.map(item =>
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
