import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faFolder, faChevronDown, faClipboardList, faSearch, faBrain, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import avance from '../assets/img/avance.jpg'
import consultar from '../assets/img/consultar.jpg'
import actualizar from '../assets/img/actualizar.jpg'
import GestionDeAvances from '../Components/Avances/GestionDeAvances.css'

const GestionDeProyectos = () => {
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
                                <h4>Consultar Proyectos</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá consultar sus proyectos
                                </p>
                                <Link className="button" aria-current="page" to="/ConsultarProyectos" >Consultar Proyectos</Link>
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

export default GestionDeProyectos