import { connect } from 'dva'
import React, { Component } from 'react'

class Cinema extends Component {
  componentDidMount() {
    if(this.props.list.length == 0) {
      this.props.dispatch({
        type:'maizuo/getCinemaList'
      })
    }else {
      console.log('缓存')

    }
  }
  render() {
    return (
      <div>
        {this.props.list.map(item=>
          <li key={item.cinemaId}>
            {item.name}
          </li>
        )}
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    list: state.maizuo.list
  }
}
export default connect(mapStateToProps)(Cinema)