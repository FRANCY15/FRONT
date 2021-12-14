import React from 'react'
import fondoLogin from '../assets/img/fondoLogin.jpg'
import '../Components/Avances/GestionDeAvances.css'
import { faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
    return (
        <div className='imagen2'>
        <div className="container-fluid col-2">
            
            <div className="row">
            
                <div className="col-sm-8"></div>
                <br />
                <br />
                <h1 className="h2">Ingresar al sistema </h1>
                <br />
                <br />
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <label className="h6">Email</label>
                    <br />
                </div>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
            </div>
            <br />
            <div class="mb-3 row">
                <div className="col-sm-12">
                    <label className="h6">Password</label>
                </div>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" />
                </div>
            </div>
            <button className="btn btn-dark h5"><FontAwesomeIcon icon={faSignInAlt}/>  Ingresar </button>
        </div>
        </div>
    )
}

export default Login