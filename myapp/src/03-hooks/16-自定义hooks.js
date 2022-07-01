import React, { Component,useState,useEffect,useMemo,useCallback } from 'react'
import axios from 'axios'

function useCinemaList() {
    const [cinemaList, setCinemaList] = useState([])
    useEffect(()=>{
        //请求数据
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7445935',
            headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            setCinemaList(res.data.data.cinemas)
        })
    }, [])
    return {cinemaList}
}

function useFilter(cinemaList, mytext) {
    //useMemo每次把函数执行结果返回
    const getCinemaList = useMemo(()=> {
        let value = mytext.toUpperCase()
        let newList = cinemaList.filter(item=>item.name.toUpperCase().includes(value)||item.address.toUpperCase().includes(value))
        return newList
    }, [mytext, cinemaList])

    return {getCinemaList}
}

export default function Cinema() {
    const [mytext, setMytext] = useState('')

    const {cinemaList} = useCinemaList()
    
    const {getCinemaList} = useFilter(cinemaList, mytext)

  return (
    <div>
      <input onChange={(evt)=>{
          setMytext(evt.target.value)
      }} value={mytext}></input>
      {getCinemaList.map(item=>
          <dl key={item.cinemaId}>
            <dt>
              {item.name}
            </dt>
            <dd>
              {item.address}
            </dd>
          </dl>
      )}
    </div>
  ) 
}
