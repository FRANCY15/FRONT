import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import GestionDeAvances from './Components/Avances/GestionDeAvances';
import CrearProyectos from './Proyectos/CrearProyectos'
import GestionDeProyectos from './Proyectos/GestionDeProyectos';
import ConsultarProyectos from './Proyectos/ConsultarProyectos'
import ActualizarProyectos from './Proyectos/ActualizarProyectos';
import GestionDeInscripciones from './Inscripciones/GestionDeInscripciones';
import ConsultarInscripciones from './Inscripciones/ConsultarInscripciones';
import VerProyectos from './Proyectos/VerProyectos'
import GestionDeUsuarios from './Usuarios/GestionDeUsuarios';
import RegistrarUsuario from './Usuarios/RegistrarUsuario';
import ConsultarUsuarios from './Usuarios/ConsultarUsuarios';
import ActualizarUsuarios from './Usuarios/ActualizarUsuarios';








import NavbarComponent from './shared/components/navbar/NavbarComponent'
import PagPal from './Home';
import CrearAvances from './Components/Avances/CrearAvance';
import Login from './Login/Login';


function App() {

  return (

    <Router>
    <NavbarComponent/>
    <Routes>
      <Route path="/Home" element={<PagPal />}/>
      <Route path="/GestionDeAvances" element={<GestionDeAvances />} />
      <Route path="/CrearAvance" element={<CrearAvances />} />
      <Route path="/GestionDeProyectos" element={<GestionDeProyectos />} />
      <Route path="/CrearProyectos" element={<CrearProyectos />} />
      <Route path="/ConsultarProyectos" element={<ConsultarProyectos />} />
      <Route path="/VerProyectos" element={<VerProyectos />} />
      <Route path="/ActualizarProyectos" element={<ActualizarProyectos />} />
      <Route path="/GestionDeInscripciones" element={<GestionDeInscripciones />} />
      <Route path="/ConsultarInscripciones" element={<ConsultarInscripciones />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/GestionDeUsuarios" element={<GestionDeUsuarios />} />
      <Route path="/RegistrarUsuario" element={<RegistrarUsuario />} />
      <Route path="/ConsultarUsuarios" element={<ConsultarUsuarios />} />
      <Route path="/ActualizarUsuarios" element={<ActualizarUsuarios />} />
    </Routes>
    </Router>
  );
}

export default App;