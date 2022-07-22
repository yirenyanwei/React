import React,{useState} from 'react'
import store from '../redux/store'

export default function City(props) {
    const [list, setList] = useState(['北京','上海','广州','深圳'])
  return (
    <div>
        city
        <ul>
            {
                list.map(item=>
                <li key={item} onClick={()=>{
                    //dispatch
                    store.dispatch({
                        type:'change-city',
                        payload: item
                    })
                    //跳转
                    // props.history.push('/cinemas')
                    props.history.goBack()
                }}>{item}</li>
            )
            }
        </ul>
    </div>
  )
}
