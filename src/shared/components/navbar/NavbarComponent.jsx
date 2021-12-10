import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCogs, faFolder, faChevronDown, faClipboardList, faSearch, faBrain, faFolderPlus} from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid" >
                    <a class="navbar-brand" href="#"> <FontAwesomeIcon icon={faBrain}/> TeemFifteen </a>
                    <form class="d-flex">
                    <FontAwesomeIcon icon={faSearch}/>
                           <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                        </form>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faFolder}/> Gestión de Proyectos</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link active " href="#"><FontAwesomeIcon icon={faCogs}/>
                                    Gestión de Usuarios</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active"> <FontAwesomeIcon icon={faClipboardList}/> Gestión de Inscripciones</a>
                            </li>
                            <li class="nav-item dropdown"> 
                            <Link to="/GestionDeAvances" className="dropdown-item" > <FontAwesomeIcon icon={faFolderPlus}/> Gestión de Avances</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                        <a class="btn btn-secondary" type="">Ingresar al Sistema <FontAwesomeIcon icon={faChevronDown}/> </a>
                    </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
