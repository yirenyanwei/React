import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    state = {
        type:0
    }
  render() {
    return (
      <div>
        <ul>
            <li onClick={()=>{this.setState({type:0})}}>正在热映</li>
            <li onClick={()=>{this.setState({type:1})}}>即将上映</li>
        </ul>
        <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}

class FilmList extends Component {
    state = {
        list: []
    }
    getFilmList(props) {
        let url = '/json/maizuo.json'
        if(props.type == 1) {
            url = '/json/maizuo2.json'
        }
        console.log(props.type)
        axios.get(url).then(res=>{
            this.setState({list:res.data.data.films})
        })
    }
    componentDidMount() {
        this.getFilmList(this.props)
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.getFilmList(nextProps)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item=>
                        <li key={item.filmId}>{item.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

