import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import GestionDeAvances from './Components/Avances/GestionDeAvances';
import CrearProyectos from './Proyectos/CrearProyectos'
import GestionDeProyectos from './Proyectos/GestionDeProyectos';

import ConsultarProyectos from './Proyectos/ConsultarProyectos';
import ActualizarProyectos from './Proyectos/ActualizarProyectos';
import GestionDeInscripciones from './Inscripciones/GestionDeInscripciones';
import ConsultarInscripciones from './Inscripciones/ConsultarInscripciones'
import GestionDeUsuarios from './Components/Usuarios/GetionDeUsuarios';
import ConsultarUsuarios from './Components/Usuarios/ConsultarUsuarios';
import RegistrarUsuario from "./Components/Usuarios/RegistrarUsuario"

import NavbarComponent from './shared/components/navbar/NavbarComponent'
import PagPal from './Home';
import CrearAvances from './Components/Avances/CrearAvance';
import Login from './Login/Login';


import ConsultarAvances from './Components/Avances/ConsultarAvances';
import ActualizarAvances from './Components/Avances/ActualizarAvances';
import InscribirAproyectos from './Proyectos/InscribirAproyecto';
import ConsultarTodosLosProyectos from './Proyectos/ConsultarTodosLosProyectos';
import ConsultarEstudiantes from "./Components/Usuarios/ConsultarEstudiantes"



function App() {

  return (

    <Router>
    <NavbarComponent/>
    <Routes>
      <Route path="/Home" element={<PagPal />}/>
      <Route path="/GestionDeAvances" element={<GestionDeAvances />} />
      <Route path="/CrearAvance" element={<CrearAvances />} />
      <Route path="/ConsultarAvances" element={<ConsultarAvances />} />
      <Route path="/ActualizarAvances" element={<ActualizarAvances />} />
      <Route path="/GestionDeProyectos" element={<GestionDeProyectos />} />
      <Route path="/CrearProyectos" element={<CrearProyectos />} />
      <Route path="/ConsultarProyectos" element={<ConsultarProyectos />} />
      <Route path="/ActualizarProyectos" element={<ActualizarProyectos />} />
      <Route path= "/InscribirAproyecto" element={<InscribirAproyectos/>} />
      <Route path="/GestionDeInscripciones" element={<GestionDeInscripciones />} />
      <Route path="/ConsultarInscripciones" element={<ConsultarInscripciones />} />
      <Route path="/GestionDeUsuarios" element={<GestionDeUsuarios />} />
      <Route path="/ConsultarUsuarios" element={<ConsultarUsuarios />} />
      <Route path="/ConsultarEstudiantes" element={<ConsultarEstudiantes />} />
      <Route path="/ConsultarTodosLosProyectos" element={<ConsultarTodosLosProyectos/>}/>
      <Route path="/RegistrarUsuario" element={<RegistrarUsuario />} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    </Router>
  );
}

export default App;