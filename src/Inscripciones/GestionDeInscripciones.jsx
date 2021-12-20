import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import avance from '../assets/img/avance.jpg'
import consultar from '../assets/img/consultar.jpg'
import actualizar from '../assets/img/actualizar.jpg'

const GestionDeInscripciones = () => {
  return (

      <div className='container d-flex justify-content-center align-items-center'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className='card'>
                            <img className='imagen' src={avance} />
                            <div className='card-body'>
                                <h4>Crear Proyecto</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá registrar sus proyectos
                                </p>
                                <Link className="button" aria-current="page" to="/CrearProyectos" >Crear Proyecto</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='card'>
                            <img className='imagen' src={consultar} />
                            <div className='card-body'>
                                <h4>Consultar Inscripciones</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá consultar las solicitudes de ingreso pendientes.
                                </p>
                                <Link className="button" aria-current="page" to="/ConsultarInscripciones" >Consultar Inscripciones</Link><br/>
                                <Link className="button" aria-current="page" to="/Inscrip" >Aprobar o Rechazar Inscripcion</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='card'>
                            <img className='imagen' src={actualizar} />
                            <div className='card-body'>
                                <h4>Actualizar Proyectos</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá actualizar sus proyectos
                                </p>
                                <Link className="button" aria-current="page" to="/ActualizarProyectos" >Actualizar o Modificar Proyecto</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

   
  
  
  
  

  )
}

export default GestionDeInscripciones