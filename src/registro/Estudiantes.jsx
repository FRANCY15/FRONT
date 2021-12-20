import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { GET_ESTUDIANT } from './querieEstud';


const IndexEstudiante = () => {
    const {data, error, loading} = useQuery(GET_ESTUDIANT);
    

    useEffect(() => {
        console.log('data servidor', data);
    }, [data]);

    return(
          <div>
    Datos Estudiantes:
    <table className='tabla'>
      <thead>
        <tr>
          <th>Identificación</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Rol</th>
          <th>Correo Electronico</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {data &&
         data.obtenerEstudiantes.map((u) => {
            return (
              <tr key={u._id}>
                <td>{u.identificacion}</td>
                <td>{u.nombre}</td>
                <td>{u.apellido}</td>
                <td>{u.rol}</td>
                <td>{u.correoElectronico}</td>
                <td>{u.estado}</td>
                {/* <td>
                   <Link to={`/usuarios/editar/${u._id}`}>
                    <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                  </Link> 
                </td>  */}
              </tr>
            )
        })}
      </tbody>
    </table>
  </div> 
    );
 };


 export default IndexEstudiante;