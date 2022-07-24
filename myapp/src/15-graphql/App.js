import React, { Component,useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import FilmQuery from './components/FilmQuery';
import FilmCreate from './components/FilmCreate'

const client = new ApolloClient({
  uri: '/graphQL',
  cache: new InMemoryCache(),
});

export default class App extends Component {
    state = {
        fetch:null
    }
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <FilmQuery fetch={(_fecth)=>{
              this.setState({fetch:_fecth})
              console.log(_fecth)
          }}></FilmQuery>
          <FilmCreate fetch={this.state.fetch}></FilmCreate>
        </div>
      </ApolloProvider>
    )
  }
}