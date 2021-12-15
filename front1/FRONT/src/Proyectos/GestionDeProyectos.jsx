import React from 'react'
import { Link } from 'react-router-dom'


const GestionDeProyectos = () => {
    return (
<div class="container-md">
<div class="text-center">
<div class="card-group">

<div class="card text-white bg-dark mb-3">
    <div class="card-body">
    <h5 class="card-title">Crear Proyectos</h5>
    <p class="card-text">Funciona, pero está feo.</p>
  </div>
    <Link className="button" aria-current="page" to="/CrearProyectos" >Ok</Link>
  </div>

  <div class="card text-white bg-dark mb-3">
    <div class="card-body">
    <h5 class="card-title">Consultar Proyectos</h5>
    <p class="card-text">Funciona. Ver cómo filtrar lo que se muestra con la autenticación. Explorar otras opciones. Actualmente es una búsqueda "quemada".</p>
  </div>
  <Link className="button" aria-current="page" to="/ConsultarProyectos" >Ok</Link>
  </div>

  <div class="card text-white bg-dark mb-3">
    <div class="card-body">
    <h5 class="card-title">Actualizar Proyectos</h5>
    <p class="card-text">¿Mejor agregar un botón para esto en cada proyecto?</p>
  </div>
  <Link className="button" aria-current="page" to="/ActualizarProyectos" >Ok</Link>
  </div>

  </div>
  </div>
  </div>


    )
}

export default GestionDeProyectos