import React, { Component,useState,useEffect,useContext,useReducer } from 'react'
import axios from 'axios'
import './css/03-commucation.css'

const reducer = (prevState,action)=>{
    let newState = {...prevState}
    switch(action.type){
        case 'info':
            newState.info = action.value
            return newState
        case 'filmList':
            newState.filmList = action.value
            return newState
    }
    return prevState
}
const initialState = {
    info: '',
    filmList:[]
}
var GlobalContext = React.createContext()//创建context对象

function FilmItem(props){
    let filmObj = props.filmObj
    const {state,dispatch} = useContext(GlobalContext)
    return (
        <div className='filmitem' onClick={()=>{
            console.log(filmObj.synopsis)
            dispatch({
                type:'info',
                value:filmObj.synopsis
            })
        }}>
            <img src={filmObj.poster} alt={filmObj.name}></img>
            <h4>{filmObj.name}</h4>
            <div>观众评分:{filmObj.grade}</div>
        </div>
    )
}

function FilmDetail() {
    const {state} = useContext(GlobalContext)
    return (
        <div className='filmdetail'>
            {state.info}
        </div>
    )
}

export default function App() {
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('/json/maizuo.json').then(res=>{
            dispatch({
                type:'filmList',
                value:res.data.data.films
            })
        })
    }, [])
    return (
        <GlobalContext.Provider value={{
            state,dispatch
        }}>
            <div>
                {state.filmList.map(item=>
                    <FilmItem key={item.filmId} filmObj={item}></FilmItem>
                )}
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}
