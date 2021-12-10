import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import GestionDeAvances from './GestionDeAvances';


import NavbarComponent from './shared/components/navbar/NavbarComponent'
import PagPal from './Home';


function App() {

  return (

    <Router>
    <NavbarComponent/>
    <Routes>
      <Route path="/" element={<PagPal />}/>
      <Route path="/GestionDeAvances" element={<GestionDeAvances />} />
    </Routes>
    </Router>
  );
}

export default App;