import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const Usuario = ({ user }) => {

    const ACEPTAR_USUARIO = gql`
        mutation aceptarUsuario($identificacion: Int) {
            aceptarUsuario(identificacion: $identificacion)
          }
    `
    
    const [aceptar] = useMutation(ACEPTAR_USUARIO)


    const aceptarUser = () => {
        aceptar({ variables: { identificacion: user.identificacion } })
    }

    return <tr>
        <td>{user.nombre}</td>
        <td>{user.apellido}</td>
        <td>{user.identificacion}</td>
        <td>{user.estado}</td>
        <td>{user.correoElectronico}</td>
        <td>{user.rol}</td>
        <td>{user.estado === "Pendiente" ? <button type="submit" className="btn btn-primary" onClick={aceptarUser}>Autorizar</button> : null }
            {/* <button className="btn btn-danger" onClick={eliminarUser}>Eliminar</button> */}</td>
    </tr>
}

export default Usuario