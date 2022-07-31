import React, {useEffect} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Detail() {
    const [searchParams, setSearchParams] = useSearchParams()
    const params = useParams()
    useEffect(() => {
      //params传参 setSearchParams只能在当前页面刷新不同id用:猜你喜欢
      console.log(searchParams.get('filmId'))
      //路由传参
      console.log(params.filmId)
    }, [])
    
  return (
    <div>
        Detail
    </div>
  )
}
