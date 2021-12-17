import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faFolder, faChevronDown, faClipboardList, faSearch, faBrain, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import avance from '../assets/img/avance.jpg'
import consultar from '../assets/img/consultar.jpg'
import actualizar from '../assets/img/actualizar.jpg'

const GestionDeUsuarios = () => {
  return (

      <div className='container d-flex justify-content-center align-items-center'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className='card'>
                            <img className='imagen' src={avance} />
                            <div className='card-body'>
                                <h4>Registrar Usuario</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá registrar usuario
                                </p>
                                <Link className="button" aria-current="page" to="/RegistrarUsuario" >Registrar usuario</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='card'>
                            <img className='imagen' src={consultar} />
                            <div className='card-body'>
                                <h4>Consultar Usuarios</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá consultar los usuarios
                                </p>
                                <Link className="button" aria-current="page" to="/ConsultarUsuarios" >Consultar Usuarios</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='card'>
                            <img className='imagen' src={actualizar} />
                            <div className='card-body'>
                                <h4>Actualizar Usuarios</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá actualizar los usuarios
                                </p>
                                <Link className="button" aria-current="page" to="/ActualizarUsuarios" >Actualizar o modificar los usuarios</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

   
  
  
  
  

  )
}

export default GestionDeUsuarios