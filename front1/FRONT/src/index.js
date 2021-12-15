import React from 'react';
import ReactDom from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";


import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:9092/graphql',
  cache: new InMemoryCache()
});


ReactDom.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
  <App/>
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

