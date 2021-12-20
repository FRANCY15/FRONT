import { gql, useMutation } from "@apollo/client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faIdCardAlt, faEnvelope, faUserTag, faKey } from '@fortawesome/free-solid-svg-icons'


const REGISTRAR_USUARIO= gql`
mutation crearUsuario( $identificacion: Int, $nombre: String, $apellido: String, $rol: String, $correoElectronico: String, $contrasegna: String){
    crearUsuario(usuarioSistema:{identificacion: $identificacion, nombre:$nombre, apellido: $apellido, rol:$rol, correoElectronico:$correoElectronico, contrasegna:$contrasegna})
}
`

const RegistrarUsuario = () => {
    const [creadorDeUsuario] = useMutation(REGISTRAR_USUARIO)
    let user = {
        identificacion: 0,
        nombre: "",
        apellido: "",
        rol: "",
        correoElectronico: "",
        contrasegna: ""
    }

    function confirmacion () {
        alert("Usuario registrado correctamente")
    }

    return (

    <div className="container col-12">
        <div className="row">
            <center>
            <div className="col-md-4">
                <div className="well well-sm">
                    <form className="form-horizontal"
                    onSubmit={e => {
                        e.preventDefault();
                        creadorDeUsuario({variables:{
                            identificacion: parseInt(user.identificacion.value),
                            nombre: user.nombre.value,
                            apellido: user.apellido.value,
                            rol: user.rol.value,
                            correoElectronico: user.correoElectronico.value,
                            contrasegna: user.contrasegna.value
                        }})
                    }} >
                        <fieldset>
                        <legend className="text-center header"><h1>Crear Usuario</h1></legend>
                        <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text"><FontAwesomeIcon icon={faUser} /></div>
                                    <input type="text" placeholder="Nombre" className="form-control" ref={nombre => user.nombre = nombre} />
                                </div>
                        </div>

                        <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text"><FontAwesomeIcon icon={faUser} /></div>
                                    <input type="text" placeholder="Apellido" className="form-control" ref={apellido => user.apellido = apellido} />
                                </div>
                        </div>

                        <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text"><FontAwesomeIcon icon={faIdCardAlt} /></div>
                                    <input type="text" placeholder="Identificacion" className="form-control" ref={identificacion => user.identificacion = identificacion} />
                                </div>
                        </div>
                    
                        <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text"><FontAwesomeIcon icon={faUserTag} /></div>
                                    <input type="text" placeholder="Rol" className="form-control" ref={rol => user.rol = rol} />
                                </div>
                        </div>

                        <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></div>
                                    <input type="text" placeholder="Email" className="form-control" ref={correoElectronico => user.correoElectronico = correoElectronico} />
                                </div>
                        </div>

                        <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text"><FontAwesomeIcon icon={faKey} /></div>
                                    <input type="password" placeholder="Contraseña" className="form-control" ref={contrasegna => user.contrasegna = contrasegna} />
                                </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12 text-center">
                            <button className="btn btn-primary" onClick={confirmacion}>Registrar Usuario</button>
                            </div>
                        </div>
                        </fieldset>
                        
                    </form>
                </div>
            </div>
            </center>
            
        </div>
    </div>)
}

export default RegistrarUsuario