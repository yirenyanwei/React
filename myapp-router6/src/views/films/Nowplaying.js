import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmItem from './FilmItem'

export default function Nowplaying() {
  const [list, setList] = useState([])
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3316713',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      setList(res.data.data.films)
    })
  }, [])
  
  return (
    <div>
      <ul>
        {
          list.map(item=>
            <FilmItem key={item.filmId} item={item}></FilmItem>
          )
        }
      </ul>
    </div>
  )
}
