import React, { Component,useState,useEffect } from 'react'
import {useQuery, gql } from '@apollo/client';
const GET_LOCATIONS = gql`
  query getNowplayingList {
    getNowplayingList{
      id,
      name,
      price
    }
  }
`;
function FilmQuery(props){
  useEffect(() => {
    props.fetch({
      refetchQueries: [
        {query: GET_LOCATIONS}, // DocumentNode object parsed with gql
        'getNowplayingList' // Query name
      ],
    })
  
    return () => {
      
    }
  }, [])
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <div>
      {
        data.getNowplayingList.map(item=>
        <div key={item.id}>
          <div>名字：{item.name}</div>
        </div>)
      }
    </div>
  )
}
export default FilmQuery