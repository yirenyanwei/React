import {useParams} from 'umi'
import {useEffect} from 'react'
interface IParams {
    filmId:string
}
export default function Detail(props:any) {
    // params 可以从 props.params useParams中获取
    const params = useParams<IParams>()
    console.log(params.filmId)
    
  return (
    <div>
        Detail
    </div>
  )
}