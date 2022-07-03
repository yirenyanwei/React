import React, { useEffect,useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import axios from 'axios'

export default function Nowplaying(props) {
  const [list, setlist] = useState([])
  useEffect(()=>{
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9666450',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log(res.data.data.films)
      setlist(res.data.data.films)
    })
  }, [])
  return (
    <div>
      <ul>
        {list.map(item=>{
          {/* 自己传参 */}
          {/* return <FilmItem item={item} key={item.filmId} history={props.history}></FilmItem> */}
          {/* withroute传参 */}
          return <WithFilmItem item={item} key={item.filmId}></WithFilmItem>
        }
        )}
      </ul>
    </div>
  )
}

function FilmItem(props) {
  let item = props.item
  let history = useHistory()
  const handleChangePage = (filmId)=>{
    //跳转路由 Noplaying组件的父组件是Route
    //history == props.history
    // 动态路由传参
    props.history.push(`/detail/${filmId}`)
    //history query传参
    // props.history.push({pathname:'/detail', query:{id:filmId}})
    //history state传参
    // props.history.push({pathname:'/detail', state:{id:filmId}})
  }
  return (
    <li onClick={()=>handleChangePage(item.filmId)}>
      {item.name}
    </li>
  )
}

const WithFilmItem = withRouter(FilmItem)