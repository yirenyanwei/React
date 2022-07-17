import React, { Component } from 'react'
import axios from 'axios'
import {RouteComponentProps} from 'react-router-dom'
import {Button,Swiper} from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

interface IItem {
  filmId:number,
  name:string,
  [propName:string]:any
}

export default class Film extends Component<RouteComponentProps,any> {
  state = {
    list:[],
    loopList:[]
  }
  //swiper 的属性
  swiperRef = React.createRef<SwiperRef>()
  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9666450',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log(res.data.data.films)
      this.setState({
        list:res.data.data.films
      })
    })

    axios.get('/json/banner.json').then(res=>{
      console.log(res.data.data)
      this.setState({
        loopList: res.data.data
      })
    })
  }
  
  render() {
    return (
      <div>
        {/* 轮播 */}
        <Swiper ref={this.swiperRef}>
          {this.state.loopList.map((item:any)=>
            <Swiper.Item key={item.bannerId}>
              <img src={item.imgUrl} style={{width:'100%'}}></img>
            </Swiper.Item>
          )}
        </Swiper>
        <Button color='primary' onClick={()=>{
          //前边为真才执行
          this.swiperRef.current?.swipeNext()
        }}>下一个</Button>

        <ul>
          {
            this.state.list.map((item:IItem)=>
              <li key={item.filmId} onClick={()=>{
                this.props.history.push(`/detail/${item.filmId}`)
              }}>{item.name}</li>
            )
          }
        </ul>
      </div>
    )
  }
}
