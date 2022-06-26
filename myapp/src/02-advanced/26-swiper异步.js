import React, { Component } from 'react'
 // import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';
 // import styles bundle
 import 'swiper/css/bundle';

export default class App extends Component {
    state = {
        list: ['111','222','333','444']
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                list:['aaa','bbb','ccc']
            })
        },1000)
    }
    componentDidUpdate() {
        new Swiper('.swiper', {
            loop: true, // 循环模式选项
        })
    }
  render() {
    return (
      <div>
          <div className="swiper" style={{height:'200px',background:'yellow'}}>
            <div className="swiper-wrapper">
                {this.state.list.map(item=>
                    <div key={item} className="swiper-slide">{item}</div>
                )}
            </div>
        </div>
      </div>
    )
  }
}
