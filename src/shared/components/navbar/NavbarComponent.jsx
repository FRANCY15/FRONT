import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCogs, faFolder, faChevronDown, faClipboardList, faSearch, faBrain, faFolderPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/Home"> <FontAwesomeIcon icon={faBrain}/> TeemFifteen </Link>
                    <form className="d-flex">
                    <FontAwesomeIcon icon={faSearch}/>
                           <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                        </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item dropdown"> 
                                <Link className="nav-link active" aria-current="page" to="/GestionDeProyectos" ><FontAwesomeIcon icon={faFolder}/> Gestión de Proyectos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active " href="#"><FontAwesomeIcon icon={faCogs}/>
                                    Gestión de Usuarios</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active"> <FontAwesomeIcon icon={faClipboardList}/> Gestión de Inscripciones</a>
                            </li>
                            <li className="nav-item dropdown"> 
                            <Link className="nav-link active" aria-current="page" to="/GestionDeAvances" ><FontAwesomeIcon icon={faFolderPlus}/>Gestión de Avances</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                        <Link className="btn btn-secondary" to="/Login" >Ingresar al Sistema <FontAwesomeIcon icon={faChevronDown}/> </Link>
                    </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
