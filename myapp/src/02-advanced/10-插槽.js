import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
                child
                {/* 具名插槽 */}
                {this.props.children}
                {this.props.children[0]}
            </div>
        )
    }
}

class Swiper extends Component {
    render(){
        return (
            <div style={{background:'yellow'}}>
                {this.props.children}
            </div>
        )
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Swiper>
            <div>111</div>
        </Swiper>
        <Swiper>
            <div>222</div>
        </Swiper>
        <Child>
            <div>1111</div>
            <div>2222</div>
        </Child>
      </div>
    )
  }
}
