import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const Usuario = ({ user }) => {

    const ACEPTAR_USUARIO = gql`
        mutation aceptarUsuario($identificacion: Int) {
            aceptarUsuario(identificacion: $identificacion)
          }
    `
    const ELIMINAR_USUARIO = gql`
        mutation deleteUser($ident:Int){
            deleteUser(ident:$ident)
        }
    `
    const [aceptar] = useMutation(ACEPTAR_USUARIO)
    const [eliminar] = useMutation(ELIMINAR_USUARIO)


    const aceptarUser = () => {
        aceptar({ variables: { identificacion: user.identificacion } })
    }

    const eliminarUser = () => {
        eliminar({ variables: { ident: user.identificacion } })
    }

    return <tr>
        <td>{user.nombre}</td>
        <td>{user.apellido}</td>
        <td>{user.identificacion}</td>
        <td>{user.estado}</td>
        <td>{user.correoElectronico}</td>
        <td>{user.rol}</td>
        <td>{user.estado === "Pendiente" ? <button className="btn btn-primary" onClick={aceptarUser}>Autorizar</button> : null }
            {/* <button className="btn btn-danger" onClick={eliminarUser}>Eliminar</button> */}</td>
    </tr>
}

export default Usuario