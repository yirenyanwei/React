import React, { Component } from 'react'
import {RouteComponentProps} from 'react-router-dom'
import store from '../redux/store'
interface IParams {
    myid:string
}
//RouteComponentProps的第一个泛型参数
export default class Detail extends Component<RouteComponentProps<IParams>> {
  componentDidMount() { 
    store.dispatch({
      type:'hide'
    })
   }
   componentWillUnmount() {
    store.dispatch({
      type:'show'
    })
   }
  render() {
    return (
      <div>
          {this.props.match.params.myid}
      </div>
    )
  }
}
