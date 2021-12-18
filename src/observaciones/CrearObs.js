import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const CrearO = ({ ob }) => {

    const CREAR_O = gql`
      mutation AgregarObservacion($idProyecto: String, $observaciones: String) {
  agregarObservacion( idProyecto: $idProyecto, observaciones: $observaciones)
}
    `


    const [agregar] = useMutation(CREAR_O)
 

    const crearObservaciones = () => {
        agregar({ variables: { idProyecto: ob.idProyecto } })
    }

 


    return <tr>
         <td>{ob.idProyecto}</td>
        <td>{ob.fechaAvance}</td>
        <td>{ob.descripcion}</td>
        <td>{ob.observaciones}</td>
        <td>{ob.estudiantesInscritos}</td>
        <td>{ob.observaciones === "" ? <button className="btn btn-primary" onClick={crearObservaciones}>Registrar</button> : null }
            {/* <button className="btn btn-danger" onClick={eliminarUser}>Eliminar</button> */}</td>
    </tr>
}

export default CrearO