import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import { useHistory } from 'umi'
import { connect } from 'dva'
import { useEffect } from 'react'
import { DotLoading } from 'antd-mobile'
function Cinema(props: any) {
  const history = useHistory()
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        {/* <MoreOutline /> */}
      </Space>
    </div>
  )
  useEffect(() => {
    if(props.list.length == 0) {
      props.dispatch({
        type:'cinema/getList',
        payload:{
          cityId:props.cityId
        }
      })
    }else {
      console.log('缓存')
    }

    return () => {

    }
  }, [])

  return (
    <div>
      <NavBar onBack={() => {
        history.push('/city')
      }} back={props.cityName} backArrow={false} right={right}>标题</NavBar>
      {/* loading */}
      {props.loading&&<div style={{ fontSize: 14, textAlign:'center'}}>
          <DotLoading />
      </div>}

      <ul>
        {props.list.map((item:any)=>
          <li key={item.cinemaId}>{item.name}</li>
          )}
      </ul>
    </div>
  )
}
export default connect((state: any) => {
  return {
    cityName: state.city.cityName,
    cityId: state.city.cityId,
    list: state.cinema.list,
    loading:state.loading.global,//是否正在异步中
  }
})(Cinema)