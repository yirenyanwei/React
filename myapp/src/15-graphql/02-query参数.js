import React, { Component,useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider ,useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphQL',
  cache: new InMemoryCache(),
});
const GET_LOCATIONS = gql`
  query getNowplayingOne($id:String!) {
    getNowplayingOne(id:$id){
      id,
      name,
      price
    }
  }
`;

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          App
          <FilmQuery></FilmQuery>
        </div>
      </ApolloProvider>
    )
  }
}

function FilmQuery(){
    const [text, setText] = useState('62dbb000e54b967d1f9f0f5f')
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables:{
        id:text
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      FilmQuery-
      <input onChange={(evt)=>{
          setText(evt.target.value)
      }}></input>
      {
        data.getNowplayingOne.map(item=>
        <div key={item.id}>
          <div>名字：{item.name}</div>
        </div>)
      }
    </div>
  )
}
