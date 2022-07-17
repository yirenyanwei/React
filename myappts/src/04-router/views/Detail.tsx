import React, { Component } from 'react'
import {RouteComponentProps} from 'react-router-dom'
interface IParams {
    myid:string
}
//RouteComponentProps的第一个泛型参数
export default class Detail extends Component<RouteComponentProps<IParams>> {
  render() {
    return (
      <div>
          {this.props.match.params.myid}
      </div>
    )
  }
}
