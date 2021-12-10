import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import GestionDeAvances from './Components/Avances/GestionDeAvances';
import CrearProyectos from './Proyectos/CrearProyectos'
import GestionDeProyectos from './Proyectos/GestionDeProyectos';
import ConsultarProyectos from './Proyectos/ConsultarProyectos'


import NavbarComponent from './shared/components/navbar/NavbarComponent'
import PagPal from './Home';
import CrearAvances from './Components/Avances/CrearAvance';


function App() {

  return (

    <Router>
    <NavbarComponent/>
    <Routes>
      <Route path="/" element={<PagPal />}/>
      <Route path="/GestionDeAvances" element={<GestionDeAvances />} />
      <Route path="/CrearAvance" element={<CrearAvances />} />
      <Route path="/GestionDeProyectos" element={<GestionDeProyectos />} />
      <Route path="/CrearProyectos" element={<CrearProyectos />} />
      <Route path="/ConsultarProyectos" element={<ConsultarProyectos />} />
    </Routes>
    </Router>
  );
}

export default App;