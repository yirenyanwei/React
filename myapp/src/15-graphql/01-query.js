import React, { Component } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider ,useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphQL',
  cache: new InMemoryCache(),
});
const GET_LOCATIONS = gql`
  query {
    getNowplayingList{
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
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      FilmQuery-
      {
        data.getNowplayingList.map(item=>
        <div key={item.id}>
          <div>{item.name}</div>
        </div>)
      }
    </div>
  )
}
