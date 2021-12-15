import { useMutation,gql } from "@apollo/client";
import React from "react";


const CREAR_INSCRIPCION = gql`
  mutation Inscripcion($idInscripcion: String, $idProyecto: String, $identificacion: String, $estadoInscripcion: String, $fechaIngreso: Date, $fechaEgreso: Date ) {
    crearInscripcion(inscripciones:{ idInscripcion: $idInscripcion, idProyecto: $idProyecto, identificacion: $identificacion, estadoInscripcion: $estadoInscripcion, fechaIngreso: $fechaIngreso, fechaEgreso: $fechaEgreso} )
    }
`;

const CrearInscripcion = () => {
    const [ingresarInscripcion] = useMutation(CREAR_INSCRIPCION)

    let inscripciones={
        idInscripcion: String,
        idProyecto: String,
        identificacion: String,
        estadoInscripcion: String,
        fechaIngreso: Date,
        fechaEgreso: Date
    }


return(<div>
    <h1>Crear Inscripcion</h1>
    <form 
    onSubmit={e => {
        e.preventDefault();
        ingresarInscripcion({variables: {
            idInscripcion: inscripciones.idInscripcion.value,
            idProyecto: inscripciones.idProyecto.value, 
            identificacion: inscripciones.identificacion.value, 
            estadoInscripcion: inscripciones.estadoInscripcion.value, 
            fechaIngreso: inscripciones.fechaIngreso.value, 
            fechaEgreso: inscripciones.fechaEgreso.value, 
          
            
        }})

    }}>
        <div>
            <label >ID de la inscripcion</label>
            <input ref = {idInscripcion => inscripciones.idInscripcion = idInscripcion} placeholder="Identificador de la inscripcion"/>
        </div>
        <div>
            <label>ID del Proyecto</label>
            <input ref = {idProyecto => inscripciones.idProyecto = idProyecto} placeholder="Identificador del proyecto"/>
        </div>
        <div>
            <label>identificación del usuario</label>
            <input ref = {identificacion => inscripciones.identificacion = identificacion} placeholder="Identificación del usuario"/>
        </div>
        <div>
            <label>Estado de la inscripción</label>
            <input ref = {estadoInscripcion => inscripciones.estadoInscripcion = estadoInscripcion} placeholder="Estado de la inscripcion"/>
        </div>
        <div>
            <label>fecha de Ingreso</label>
            <input ref = {fechaIngreso => inscripciones.fechaIngreso = fechaIngreso} placeholder="Fecha de ingreso"/>
        </div>
        <div>
            <label>Fecha de egreso</label>
            <input ref = {fechaEgreso => inscripciones.fechaEgreso = fechaEgreso} placeholder="Fecha de egreso"/>
        </div>
        
        <div>
            <button>Registrar Inscripcion</button>
            
        </div>

    </form>


    </div>
)
}













export default CrearInscripcion