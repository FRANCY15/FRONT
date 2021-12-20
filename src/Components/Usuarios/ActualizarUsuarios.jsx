import { gql, useMutation } from "@apollo/client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'



const ACTUALIZAR_USUARIO = gql`
mutation modificarUsuario( $identificacion: Int, $nombre: String, $apellido: String, $correoElectronico: String ) 
  {
    editarUsuario(identificacion: $identificacion, usuario:{nombre: $nombre, apellido: $apellido, correoElectronico: $correoElectronico})
}
`

const ActualizarUsuarios = () => {
    const [modificarUsuario] = useMutation(ACTUALIZAR_USUARIO)

    let usuario = {
        identificacion: 0,
        nombre: "",
        apellido: "",
        correoElectronico: ""
    }

    function confirmacion () {
        alert("Usuario actualizado correctamente")
    }

    return(
    <div className="container-fluid col-2">
    <div className="row">
        <br />
        <br/>
        <h1 className="h1 text-align: center" >Actualizar Usuarios</h1>
        <br />
        <br />
        <form
        onSubmit={e => {
            e.preventDefault();
            modificarUsuario({variables: {
                identificacion: parseInt(usuario.identificacion.value),
                nombre: usuario.nombre.value, 
                apellido: usuario.apellido.value, 
                correoElectronico: usuario.correoElectronico.value
            }})

        }}>
            <div>
                <label className="h5">Identificación</label>
                <input ref = {identificacion => usuario.identificacion = identificacion} placeholder="Identificación del usuario a modificar" className="square"/>
            </div>
            <div>
                <label className="h5">Nombre</label>
                <input ref = {nombre => usuario.nombre = nombre} placeholder="Nuevo Nombre" className="square"/>
            </div>
            <div>
                <label className="h5">Apellido</label>
                <input ref = {apellido => usuario.apellido = apellido} placeholder="Nuevo Apellido" className="square"/>
            </div>
            <div>
                <label className="h5">Correo Electrónico</label>
                <input ref = {correoElectronico => usuario.correoElectronico = correoElectronico} placeholder="Nuevo Correo Electrónico" className="square"/>
            </div>
        
            <br></br>
            <div>
                <button className="btn btn-dark h5" onClick={confirmacion}> <FontAwesomeIcon icon={faCheckSquare}/> Actualizar usuario</button>
            </div>

        </form>

        </div>
        </div>
    )
}

export default ActualizarUsuarios






