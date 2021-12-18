import { gql, useMutation } from "@apollo/client";
import { CREAR_OBSERV } from "./mutation";
import React,{useEffect} from "react";





const AgregarObservaciones = () => {
    const  [Mutation] = useMutation(CREAR_OBSERV)

    let avance = {
        idProyecto: "",
        observaciones: ""
    
        
    }



    return(<div>
        <h1>Crear observacion</h1>
        <form 
        onSubmit={e => {
            e.preventDefault();
            Mutation({variables: {
                idProyecto: avance.idProyecto.value,
                observaciones: avance.observaciones.value, 
               
            }})

        }}>
            <div>
                <label >ID del Proyecto</label>
                <input ref = {idProyecto => avance.idProyecto = idProyecto} placeholder="Identificador del avance"/>
            </div>
            <div>
                <label>observaciones</label>
                <input ref = {observaciones => avance.observaciones = observaciones} placeholder="Agregar observacion"/>
            </div>
            
            <div>
                <button>Registrar observacion</button>
            </div>

        </form>


        </div>
    )
}













export default AgregarObservaciones
