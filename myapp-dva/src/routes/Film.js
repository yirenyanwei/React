import React, { Component } from 'react'
import request from '../utils/request'

export default class Film extends Component {
  state = {list:[]}
  componentDidMount() {
    request('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9666450', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log(res.data)
      this.setState({
        list:res.data.data.films
      })
    })
  }
  render() {
    return (
      <div>
        {
          this.state.list.map(item=>
            <li key={item.filmId} onClick={()=>{
              this.props.history.push(`/detail/${item.filmId}`)
            }}>
              <img src={item.poster} style={{width:'100px'}}></img>
              <p>{item.name}</p>
            </li>
          )
        }
      </div>
    )
  }
}
