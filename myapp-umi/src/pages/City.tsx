import { useEffect, useState } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { useHistory } from 'umi'
import {connect} from 'dva'
function City(props:any) {
    const [list, setList] = useState<any>([])
    const history = useHistory()
    const filterCitys = (cities:Array<any>)=>{
        let res = []
        for(let i = 65; i<91; i++) {
            res.push({
                type: String.fromCharCode(i),
                items:([] as Array<any>)
            })
        }
        for(let i = 0; i<cities.length; i++) {
            let c:string = cities[i].pinyin.substring(0, 1).toUpperCase()
            res[c.charCodeAt(0)-65].items.push(cities[i])
        }
        res = res.filter(item=>item.items.length>0)
        return res
    }
    const changeCity = function(item:any) {
        // console.log(item)
        props.dispatch({
            type:'city/changeCity',
            payload:{
                cityName:item.name,
                cityId:item.cityId
            }
        })
        history.push('/cinema')
    }
    useEffect(() => {
        fetch('https://m.maizuo.com/gateway?k=701271', {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16563326222080611007201281"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res.data.cities)
            setList(filterCitys(res.data.cities))
        })

        props.dispatch({
            type:'cinema/clearList'
        })
        return () => {
            //销毁
        }
    }, [])

    return (
        <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {list.map((group:any) => {
          const { type, items } = group
          return (
            <IndexBar.Panel
              index={type}
              title={type}
              key={type}
            >
              <List>
                {items.map((item:any, index:number) => (
                  <List.Item key={item.cityId} onClick={()=>changeCity(item)}>{item.name}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
    )
}
//返回空对象
export default connect(()=>({}))(City)