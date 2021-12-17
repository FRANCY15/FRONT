import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import avance from '../../assets/img/avance.jpg'
import consultar from '../../assets/img/consultar.jpg'
import actualizar from '../../assets/img/actualizar.jpg'
import './GestionDeAvances.css'


const GestionDeAvances = () => {
    return (
            <div className='container d-flex justify-content-center align-items-center'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className='card'>
                            <img className='imagen' alt="..." src={avance} />
                            <div className='card-body'>
                                <h4>Crear Avance</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá registrar los avances relacionados a sus proyectos
                                </p>
                                <Link className="button" aria-current="page" to="/CrearAvance" >Registrar Avance</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='card'>
                            <img className='imagen' alt="..." src={consultar} />
                            <div className='card-body'>
                                <h4>Consultar Avance</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá consultar los avances relacionados a sus proyectos
                                </p>
                                <Link className="button" aria-current="page" to="/CrearAvance" >Consultar Avance</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='card'>
                            <img className='imagen' alt="..." src={actualizar} />
                            <div className='card-body'>
                                <h4>Actualizar Avance</h4>
                                <p><FontAwesomeIcon icon={faFolderPlus} />
                                    En esta opción usted podrá actualizar los avances relacionados a sus proyectos
                                </p>
                                <Link className="button" aria-current="page" to="/CrearAvance" >Actualizar Avance</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default GestionDeAvances
