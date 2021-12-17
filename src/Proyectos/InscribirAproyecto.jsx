import { gql, useMutation } from "@apollo/client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import '../Components/Avances/GestionDeAvances.css'


const INSCRIBIR_A_PROYECTO = gql`
mutation InsertUserToProject($identificacion: Int, $nombreDelProyecto: String) {
    insertUserToProject(identificacion: $identificacion, nombreDelProyecto: $nombreDelProyecto)
  }

`


const InscribirAproyectos = () => {
    const [InscribirAproyecto] = useMutation(INSCRIBIR_A_PROYECTO)

    let InscripcionProyecto = {
        identificacion: 0,
        nombreDelProyecto: "",       
    }

    function confirmacion () {
        alert("Inscrito correctamente")
    }

    return(
    <div className="container-fluid col-2">
    <div className="row">
        <br />
        <br/>
        <h1 className="h1 text-align: center" > Inscribir Estudiantes a Proyectos</h1>
        <br />
        <br />
        <form
        onSubmit={e => {
            e.preventDefault();
            InscribirAproyecto({variables: {
                identificacion: parseInt(InscripcionProyecto.identificacion.value),
                nombreDelProyecto: InscripcionProyecto.nombreDelProyecto.value, 
            }})

        }}>
            <div>
                <label className="h5">Identificación del estudiante</label>
                <input ref = {identificacion => InscripcionProyecto.identificacion = identificacion} placeholder="ID proyecto a modificar" className="square"/>
            </div>
            <div>
                <label className="h5">Nombre Del Proyecto</label>
                <input ref = {nombreDelProyecto => InscripcionProyecto.nombreDelProyecto = nombreDelProyecto} placeholder="Nombre del proyecto" className="square"/>
            </div>
            <br></br>
            <div>
                <button className="btn btn-dark h5" onClick={confirmacion}> <FontAwesomeIcon icon={faCheckSquare}/> Adicionar estudiante al proyecto</button>
            </div>

        </form>

        </div>
        </div>
    )
}

export default InscribirAproyectos






