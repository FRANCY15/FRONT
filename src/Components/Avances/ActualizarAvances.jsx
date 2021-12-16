import { gql, useMutation } from "@apollo/client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import '../Avances/GestionDeAvances.css'



const ACTUALIZAR_AVANCE = gql`
mutation ActualizarAvance($id: String, $descripcion: String, $identificacion: Int, $nombreDelProyecto: String) {
    actualizarAvance(_id: $id, descripcion: $descripcion, identificacion: $identificacion, nombreDelProyecto: $nombreDelProyecto)
  }
`



const ActualizarAvances = () => {
    const [editarAvance] = useMutation(ACTUALIZAR_AVANCE)

    let avance = {        
        id: "",
        descripcion: "",
        identificacion: 0,
        nombreDelProyecto: ""
    }

    function confirmacion () {
        alert("Avance actualizado correctamente")
    }

    return(
    <div className="container-fluid col-2">
    <div className="row">
        <br />
        <br/>
        <h1 className="h1 text-align: center" >Actualizar Avances</h1>
        <br />
        <br />
        <form
        onSubmit={e => {
            e.preventDefault();
            editarAvance({variables: {
                id: avance.id.value,
                descripcion: avance.descripcion.value,
                identificacion: parseInt(avance.identificacion.value),
                nombreDelProyecto: avance.nombreDelProyecto.value
            }})

        }}>
            <div>
                <label className="h5">ID del Avance</label>
                <input ref = {idAvance => avance.id = idAvance} placeholder="ID proyecto a modificar" className="square"/>
            </div>
            <div>
                <label className="h5">Descripción</label>
                <input ref = {descripcion => avance.descripcion = descripcion} placeholder="Descripcion del avance" className="square"/>
            </div>
            <div>
                <label className="h5">Identificación del estudiante</label>
                <input ref = {IdEstudiante => avance.identificacion = IdEstudiante} placeholder="Descripcion del avance" className="square"/>
            </div>
            <div>
                <label className="h5">Nombre del Proyecto</label>
                <input ref = {nombreDelProyecto => avance.nombreDelProyecto = nombreDelProyecto} placeholder="Descripcion del avance" className="square"/>
            </div>
            <br />
            <br />
            <div>
                <button className="btn btn-dark h5" onClick={confirmacion}> <FontAwesomeIcon icon={faCheckSquare}/> Actualizar proyecto</button>
            </div>

        </form>

        </div>
        </div>
    )
}

export default ActualizarAvances






