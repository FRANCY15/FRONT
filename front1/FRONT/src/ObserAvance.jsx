import { gql, useMutation } from "@apollo/client";
import React,{useEffect} from "react";




const MUTATION_AVANCEOB = gql`
mutation Mutation($id: ID, $observaciones: String) {
  agregarObservacion(advance:{_id: $id, observaciones: $observaciones})
}
`;

const AgregarObservaciones = () => {
    const  [Mutation] = useMutation(MUTATION_AVANCEOB)

    let avance = {
        _id: "",
        observaciones: ""
    
        
    }



    return(<div>
        <h1>Crear observacion</h1>
        <form 
        onSubmit={e => {
            e.preventDefault();
            Mutation({variables: {
                _id: avance._id.value,
                observaciones: avance.observaciones.value, 
               
            }})

        }}>
            <div>
                <label >ID del Proyecto</label>
                <input ref = {_id => avance._id = _id} placeholder="Identificador del avance"/>
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
