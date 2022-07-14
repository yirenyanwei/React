import { autorun } from 'mobx'
import React, { Component,useState,useEffect } from 'react'
import store from '../mobx/store6'


export default function Cinemas(props) {
  const [cityName, setCityName] = useState('')
  const [cinemaList, setCinemaList] = useState([])
  useEffect(() => {
    if(store.list.length<=0) {
      store.getList()
    }

    var unsubscribe = autorun(()=>{
      console.log('autorun--')
      setCinemaList(store.list)
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
