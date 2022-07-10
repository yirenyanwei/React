import React, { useEffect,useState,useRef } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import axios from 'axios'
import {List,Image,InfiniteScroll} from 'antd-mobile'

export default function Nowplaying(props) {
  const [list, setlist] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const count = useRef(0)
  useEffect(()=>{
    // loadMore()
  }, [])
  const loadMore = ()=> {
    console.log('到底了')
    count.current++
    setHasMore(false)
    axios({
      url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=9666450`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log(res.data.data)
      let newList = [...list, ...res.data.data.films]
      setlist(newList)
      let has = res.data.data.total>newList.length
      setHasMore(has)
    })
  }
  const actorsFilter = (actors)=> {
    //处理演员
    if(actors == undefined) {
      return '暂无主演'
    }
    let names = actors.map(item=>item.name).join(' ')
    return names
  }
  return (
    <div>
      <List>
        {list.map(item => (
          <List.Item
            key={item.filmId}
            prefix={
              <Image
                src={item.poster}
                width={80}
              />
            }
            description={<div>
              <div style={{visibility:(item.grade?'':'hidden')}}>观众评分:<span style={{color:'orange'}}>{item.grade}</span></div>
              <div >主演:{actorsFilter(item.actors)}</div>
              <div>{item.nation} | {item.runtime}分钟</div>
            </div>}
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}
