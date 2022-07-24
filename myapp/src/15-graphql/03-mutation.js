import React, { Component,useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider ,useQuery, gql, useMutation } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphQL',
  cache: new InMemoryCache(),
});
const CREATEFILM = gql`
  mutation createFilm($input:InputFilm) {
    createFilm(input:$input){
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
          <FilmMutation></FilmMutation>
        </div>
      </ApolloProvider>
    )
  }
}

function FilmMutation(){
  const [addTodo, { loading, error, data }] = useMutation(CREATEFILM);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      FilmQuery-{console.log(data)}
      <button onClick={()=>{
        addTodo({
            variables:{
                input:{
                    name:"555",
                    poster: "https://555",
                    price:100
                }
            }
        })
      }}>增加</button>
    </div>
  )
}
