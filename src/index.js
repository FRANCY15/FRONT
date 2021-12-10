import React from 'react';
import ReactDom from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import NavbarComponent from './shared/components/navbar/NavbarComponent'
import { Routes ,Route, Router } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import GestionDeAvances from './GestionDeAvances';

const client = new ApolloClient({
  uri: 'http://localhost:9092/graphql',
  cache: new InMemoryCache()
});



const inicio = document.getElementById("root")
ReactDom.render(
  <ApolloProvider client={client}>
    <Router>
    <NavbarComponent />
      <Routes>
        <Route path="/GestionDeAvances" exact/>
        <Route path= "/" components={Home} />
      </Routes>
    </Router>
  </ApolloProvider>, inicio)

