import React, { useState } from 'react'
import gql from "graphql-tag"
import '../Components/Avances/GestionDeAvances.css'
import { faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMutation } from "@apollo/client"
import { useNavigate } from 'react-router';



const Login = () => {
    const his = useNavigate();
    let user;
    const [pass, setPass] = useState("")
    const AUTENTICAR_USUARIO = gql`
        mutation Autenticar($correoElectronico: String, $contrasegna: String) {
  autenticar(correoElectronico: $correoElectronico, contrasegna: $contrasegna) {
    jwt
    status
  }
}
    `
    const changeClave = (e) => {
        e.preventDefault();
        setPass(e.target.value)
    }
    const [auth] = useMutation(AUTENTICAR_USUARIO)
    const autenticar = async (e) => {
        e.preventDefault();

        const { data: { autenticar } } = await auth({
            variables: {
                correoElectronico: user.value,
                contrasegna: pass
            }
        })
        if (autenticar.status !== 200) {
            alert("Usuario y/o contrasena invalida")
        } else {
            localStorage.setItem('auth_token', autenticar.jwt)
            his("/Home")
        }
    }
    const registroUsuarioNuevo = () => {
        his("/RegistrarUsuario")
    }
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
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" ref={u => user = u} />
                </div>
            </div>
            <br />
            <div className="mb-3 row">
                <div className="col-sm-12">
                    <label className="h6">Password</label>
                </div>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword"  value={pass}
                onChange={changeClave}/>
                </div>
            </div>
            <button className="btn btn-dark h5" onClick={autenticar}>  Ingresar </button><br/>
            <button className="btn btn-primary" onClick={registroUsuarioNuevo}>Registro Usuario Nuevo</button>
        </div>
        </div>
    )
}

export default Login