import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
    //属性是父组件传进来的，this.props访问
    //类属性  属性验证
    static propType = {
        title: PropTypes.string,
        leftShow: PropTypes.bool,
        rightShow: PropTypes.bool,
    }
    //默认属性
    static defaultProps = {
        leftShow: true
    }
  render() {
      console.log(this.props)
      let {title,leftShow,rightShow} = this.props
    return (
      <div>
        {leftShow&&<button>返回</button>}
        navbar-{title}
        {rightShow&&<button>home</button>}
      </div>
    )
  }
}
// 这种写法也可以
// App.defaultProps = {
//     leftShow: true
// }