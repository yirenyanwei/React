import { useEffect,useState } from "react"
import {useHistory} from 'umi'
export default function Nowplaying(props:any) {
    const [list, setList] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9666450', {
            headers: {
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
              'X-Host': 'mall.film-ticket.film.list'
            }
          }).then(res=>res.json())
          .then(res=>{
            console.log(res.data)
            setList(res.data.films)
          })
    
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        {list.map((item:any)=>
            <li key={item.filmId} onClick={()=>{
                //props.history  useHistory都可以
                history.push(`/detail/${item.filmId}`)
            }}>
                {item.name}
            </li>
        )}
    </div>
  )
}