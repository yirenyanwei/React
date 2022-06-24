import React, { Component } from 'react'
import axios from 'axios'
import './css/03-commucation.css'

class FilmItem extends Component {
    render() {
        let filmObj = this.props.filmObj
        return (
            <div className='filmitem' onClick={()=>{
                this.props.event(filmObj.synopsis)
            }}>
                <img src={filmObj.poster} alt={filmObj.name}></img>
                <h4>{filmObj.name}</h4>
                <div>观众评分:{filmObj.grade}</div>
            </div>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <div className='filmdetail'>
                {this.props.info}
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        info: ''
    }
    constructor() {
        super()
        this.state = {
            filmList: []
        }
        axios.get('/json/maizuo.json').then(res=>{
            console.log(res.data.data)
            this.setState({
                filmList: res.data.data.films
            })
        })
    }
  render() {
    return (
      <div>
        {this.state.filmList.map(item=>
            <FilmItem key={item.filmId} filmObj={item} event={(value)=>{
                this.setState({info: value})
            }}></FilmItem>
        )}
        <FilmDetail info={this.state.info}></FilmDetail>
      </div>
    )
  }
}
