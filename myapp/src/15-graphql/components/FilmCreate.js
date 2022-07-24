import React, { Component,useState,useRef } from 'react'
import {gql, useMutation } from '@apollo/client';
const CREATEFILM = gql`
  mutation createFilm($input:InputFilm) {
    createFilm(input:$input){
      id,
      name,
      price
    }
  }
`;
export default function FilmCreate(props){
    const nameRef = useRef('')
    const addressRef = useRef('')
    const priceRef = useRef('')
    const [addTodo, { loading, error, data }] = useMutation(CREATEFILM);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
      <div>
        <div>名字<input ref={nameRef}></input></div>
        <div>地址<input ref={addressRef}></input></div>
        <div>价格<input ref={priceRef}></input></div>
        <button onClick={()=>{
            console.log(props.fetch.refetchQueries)
          addTodo({
              variables:{
                  input:{
                      name:nameRef.current.value,
                      poster: addressRef.current.value,
                      price:parseInt(priceRef.current.value)
                  }
              },
              refetchQueries:props.fetch.refetchQueries,//让query重新执行
          })
        }}>增加</button>
      </div>
    )
  }