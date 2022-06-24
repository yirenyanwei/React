import React, { Component } from 'react'
import axios from 'axios'
import './css/03-commucation.css'

var GlobalContext = React.createContext()//创建context对象

class FilmItem extends Component {
    render() {
        let filmObj = this.props.filmObj
        return (
            <GlobalContext.Consumer>
                {(value)=>{
                    return (
                        <div className='filmitem' onClick={()=>{
                            console.log(filmObj.synopsis)
                            value.changeInfo(filmObj.synopsis)
                        }}>
                            <img src={filmObj.poster} alt={filmObj.name}></img>
                            <h4>{filmObj.name}</h4>
                            <div>观众评分:{filmObj.grade}</div>
                        </div>
                    )
                }}
            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {(value)=>{
                    return (
                        <div className='filmdetail'>
                            {value.info}
                        </div>
                    )
                }}
            </GlobalContext.Consumer>
        )
    }
}

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            info: '111'
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
        <GlobalContext.Provider value={{
            info:this.state.info,
            changeInfo: (value)=>{
                // state改变会导致Provider重新渲染，子节点也会刷新
                this.setState({info: value})
            }

            }}>
            <div>
                {this.state.filmList.map(item=>
                    <FilmItem key={item.filmId} filmObj={item}></FilmItem>
                )}
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
  }
}
