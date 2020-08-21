import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient, { gql } from 'apollo-boost';
// import { ApolloProvide } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://smart-slug-73.hasura.app/v1/graphql'
})

client.query({
  query: gql`
  query getTodos {
    todos {
      done
      id
      text
    }
  }`
}).then(data => console.log(data))

ReactDOM.render(<App />, document.getElementById('root'));
