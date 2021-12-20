import { gql, useMutation } from "@apollo/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import React,{useEffect} from "react";
import { CREAR_OBSERV } from "./mutation";





const AgregarObservaciones = () => {
    const  [Mutation] = useMutation(CREAR_OBSERV)

    let avance = {
        idProyecto: "",
        observaciones: ""
    
        
    }

    function confirmacion () {
        alert("Observacion agregada")
    }


    return(<div className="container-fluid col-2">
        <h1 className="h1 text-align: center">Crear observacion</h1>
        <form 
        onSubmit={e => {
            e.preventDefault();
            Mutation({variables: {
                idProyecto: avance.idProyecto.value,
                observaciones: avance.observaciones.value, 
               
            }})

        }}>
            <div>
                <label className="h5" >ID del Proyecto</label>
                <input ref = {idProyecto => avance.idProyecto = idProyecto} placeholder="Identificador del avance"/>
            </div>
            <div>
                <label className="h5" >observaciones</label>
                <input ref = {observaciones => avance.observaciones = observaciones} placeholder="Agregar observacion"/>
            </div>
            <br></br>
            <div>
                <button className="btn btn-dark h5" onClick={confirmacion}> <FontAwesomeIcon icon={faCheckSquare}/>Registrar observacion</button>
            </div>

        </form>


        </div>
    )
}













export default AgregarObservaciones
