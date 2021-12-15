import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import GestionDeAvances from './GestionDeAvances';
import CrearProyectos from './Proyectos/CrearProyectos'
import GestionDeProyectos from './Proyectos/GestionDeProyectos';
import ConsultarProyectos from './Proyectos/ConsultarProyectos'
import CrearInscripcion from './Inscripciones/CrearInscripcion';
import AgregarObservaciones from './ObserAvance';
import IndexInscripciones from './Inscripciones/AprobarInscrip'

import NavbarComponent from './shared/components/navbar/NavbarComponent'
import PagPal from './Home';
import IndexUsuarios from 'registro/Usuarios';
import 'styles/tabla.css';


function App() {

  return (

    <Router>
    <NavbarComponent/>
    <Routes>
      <Route path="/" element={<PagPal />}/>
      <Route path="/GestionDeAvances" element={<GestionDeAvances />} />
      <Route path="/GestionDeProyectos" element={<GestionDeProyectos />} />
      <Route path="/CrearProyectos" element={<CrearProyectos />} />
      <Route path="/ConsultarProyectos" element={<ConsultarProyectos />} />
      <Route path="/CrearInscripcion" element={< CrearInscripcion/>} />
      <Route path="/AgregarObservaciones" element={<AgregarObservaciones/>}/>
      <Route path="/IndexInscripciones" element={<IndexInscripciones/>}/>
      <Route path="/IndexUsuarios" element={<IndexUsuarios/>}/>
    </Routes>
    </Router>
  );
}

export default App;