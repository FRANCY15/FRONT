import { useQuery, gql } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuario from "./Usuario"



const ConsultarUsuarios = () => {
    const Usuarios = gql`
    query  {
      consultaUsuarios {
        identificacion
        nombre
        apellido
        rol
        correoElectronico
        estado
      }
    }
  `;

    const { loading, error, data } = useQuery(Usuarios)
    if (loading) return <h1>Cargando...</h1>

    if (error) {
      return <div>
          <p>Hubo un error</p>
      </div>
    }
  
  
    return (<table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Identificacion</th>
          <th>Estado</th>
          <th>Email</th>
          <th>Rol</th>
        </tr>
        {data.consultaUsuarios.map((usuario) => <Usuario user={usuario} />)}
      </thead>
    </table>)
  } 

  export default ConsultarUsuarios