import React from 'react';
import ReactDom from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
} from "@apollo/client";


import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';

const httpLink = new HttpLink({ uri: 'http://localhost:9092/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : ''
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


const inicio = document.getElementById("root")
ReactDom.render(
  <ApolloProvider client={client}>
  <App/>
  </ApolloProvider>, inicio)

