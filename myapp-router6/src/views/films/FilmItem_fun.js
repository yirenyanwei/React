import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmItem(props) {
    const item = props.item
    const navigate = useNavigate()
  function handleChange(item) {
    //query
    // navigate(`/detail?filmId=${item.filmId}`)
    //route 传参
    navigate(`/detail/${item.filmId}`)
  }
  return (
    <li onClick={()=>handleChange(item)}>{item.name}

    </li>
  )
}
