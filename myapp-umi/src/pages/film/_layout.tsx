import {Redirect, useLocation} from 'umi'
export default function Film(props:any) {
    const location = useLocation()
    // /film 冲定向到/film/nowplaying
    if(location.pathname =='/film' || location.pathname =='/film/') {
        return <Redirect to='/film/nowplaying'></Redirect>
    }
    return (
      <div>
          <div style={{background:'yellow',height:'200px'}}>大轮播</div>
          {props.children}
      </div>
    )
  }