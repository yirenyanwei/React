import React, { Component } from 'react'
import axios from 'axios'
import './css/03-commucation.css'

class FilmItem extends Component {
    render() {
        let filmObj = this.props.filmObj
        return (
            <div className='filmitem' onClick={()=>{
                console.log(filmObj.synopsis)
                let evt = new CustomEvent('onChangeDetail', {detail:{info:filmObj.synopsis}})
                window.dispatchEvent(evt)
            }}>
                <img src={filmObj.poster} alt={filmObj.name}></img>
                <h4>{filmObj.name}</h4>
                <div>观众评分:{filmObj.grade}</div>
            </div>
        )
    }
}

class FilmDetail extends Component {
    constructor(){
        super()
        this.state = {
            info: 'default'
        }
        window.addEventListener('onChangeDetail', (e)=>{
            this.setState({info:e.detail.info})
        })
    }
    render() {
        return ( 
            <div className='filmdetail'>
                {this.state.info}
            </div>
        )
    }
}

export default class App extends Component {
    state = {
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
            <FilmItem key={item.filmId} filmObj={item} ></FilmItem>
        )}
        <FilmDetail ></FilmDetail>
      </div>
    )
  }
}
