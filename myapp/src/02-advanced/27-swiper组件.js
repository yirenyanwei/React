import React, { Component } from 'react'
import MSwiper from './swiper/Swiper'
import MSwiperItem from './swiper/SwiperItem'
import axios from 'axios'

export default class App extends Component {
    state = {
        list:[]
    }
    componentDidMount(){
        axios.get('/json/banner.json').then(res=>{
            this.setState({list:res.data.data})
        })
    }
  render() {
    return (
      <div>
        <MSwiper loop={false}>
            {this.state.list.map(item=>
                <MSwiperItem key={item.bannerId}>
                    <img src={item.imgUrl} style={{width:'100%'}}></img>
                </MSwiperItem>
            )}
        </MSwiper>
      </div>
    )
  }
}
