import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const Inscrip = ({ filtroInscripciones }) => {

    const ACEPTAR_INSCR = gql`
       mutation CambiarInscripcion($idInscripcion: String) {
  cambiarInscripcion(idInscripcion: $idInscripcion)
        }
    `
    const RECHAZAR_INSCR = gql`
    mutation CambiarInscripcionR($idInscripcion: String) {
        cambiarInscripcionR(idInscripcion: $idInscripcion)
      }
      `

    const [aceptar] = useMutation(ACEPTAR_INSCR)
    const [rechazar] = useMutation(RECHAZAR_INSCR)


    const aceptarInsc = () => {
        aceptar({ variables: { idInscripcion: filtroInscripciones.idInscripcion } })
    }

     const rechazarInsc = () => {
        rechazar({ variables: { idInscripcion: filtroInscripciones.idInscripcion } })
    }


    return <tr>
         <td>{filtroInscripciones.idInscripcion}</td>
        <td>{filtroInscripciones.idProyecto}</td>
        <td>{filtroInscripciones.identificacion}</td>
        <td>{filtroInscripciones.fechaEgreso}</td>
        <td>{filtroInscripciones.fechaIngreso}</td>
        <td>{filtroInscripciones.estadoInscripcion}</td>
        <td>{filtroInscripciones.estadoInscripcion === "Pendiente" ? <button className="btn btn-primary" onClick={aceptarInsc}>Aceptar</button> : null }</td>
        <td>{filtroInscripciones.estadoInscripcion === "Pendiente" ? <button className="btn btn-primary" onClick={rechazarInsc}>Rechazar</button> : null }
            {/* <button className="btn btn-danger" onClick={eliminarUser}>Eliminar</button> */}</td>
    </tr>
}

export default Inscrip