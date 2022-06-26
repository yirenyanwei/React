import React, { Component } from 'react'
 // import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

 // import styles bundle
 import 'swiper/css/bundle';

export default class MSwiper extends Component {
    initSwiper(){
        new Swiper('.swiper', {
            loop: this.props.loop, // 循环模式选项
    
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    }
    componentDidMount() {
        this.initSwiper()
    }
    componentDidUpdate() {
        this.initSwiper()
    }
  render() {
    return (
      <div>
          <div className="swiper">
            <div className="swiper-wrapper">
                {this.props.children}
            </div>
            {/* <!-- 如果需要分页器 --> */}
            <div className="swiper-pagination"></div>
            
            {/* <!-- 如果需要导航按钮 --> */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            
            {/* <!-- 如果需要滚动条 --> */}
            <div className="swiper-scrollbar"></div>
        </div>
      </div>
    )
  }
}
