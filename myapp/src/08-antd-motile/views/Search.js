import React,{useEffect,useState,useMemo} from 'react'
import {store} from '../redux/store'
import {SearchBar} from 'antd-mobile'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Search() {
    const [mytext, setMytext] = useState('')
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

     //useMemo每次把函数执行结果返回
     const getCinemaList = useMemo(()=> {
        let value = mytext.toUpperCase()
        let newList = cinemaList.filter(item=>item.name.toUpperCase().includes(value)||item.address.toUpperCase().includes(value))
        return newList
    }, [mytext, cinemaList])

  return (
    <div>
        {/* <input onChange={(evt)=>{
            setMytext(evt.target.value)
        }} value={mytext}></input> */}

        <div style={{padding:'10px'}}>
            <SearchBar placeholder='请输入内容' showCancelButton={() => true} onChange={(value)=>{
            setMytext(value)
        }} value={mytext}/>
        </div>

        <ul>
        {getCinemaList.map(item =>
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
