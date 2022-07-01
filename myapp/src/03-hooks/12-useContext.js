import React, { Component,useState,useEffect,useContext } from 'react'
import axios from 'axios'
import './css/03-commucation.css'

var GlobalContext = React.createContext()//创建context对象

function FilmItem(props){
    let filmObj = props.filmObj
    const value = useContext(GlobalContext)
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
}

function FilmDetail() {
    const value = useContext(GlobalContext)
    return (
        <div className='filmdetail'>
            {value.info}
        </div>
    )
}

export default function App() {
    const [info, setInfo] = useState('111')
    const [filmList, setFilmList] = useState([])
    useEffect(()=>{
        axios.get('/json/maizuo.json').then(res=>{
            console.log(res.data.data)
            setFilmList(res.data.data.films)
        })
    }, [])
    return (
        <GlobalContext.Provider value={{
            info:info,
            changeInfo: (value)=>{
                // state改变会导致Provider重新渲染，子节点也会刷新
                setInfo(value)
            }

            }}>
            <div>
                {filmList.map(item=>
                    <FilmItem key={item.filmId} filmObj={item}></FilmItem>
                )}
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}
