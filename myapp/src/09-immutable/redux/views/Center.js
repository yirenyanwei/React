import React, { Component } from 'react'

export default class Center extends Component {
  render() {
    return (
      <div>
        <h2>Center</h2>
        <div onClick={()=>{
          console.log(this.props)
          this.props.history.push('/filmsorder')
        }}>电影订单</div>
      </div>
    )
  }
}
