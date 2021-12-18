import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS } from './queryProy';




const FiltroProyectos = () => {
    const {data, error, loading} = useQuery(GET_PROYECTOS);
    

    useEffect(() => {
        console.log('data servidor', data);
    }, [data]);

    return(
          <div>
    Datos de Proyectos disponibles:
    <table className='tabla'>
      <thead>
        <tr>
        <th>Proyecto</th>
        <th>Objetivos Generales</th>
        <th>Objetivos Específicos</th>
        <th>Presupuesto</th>
        <th>Fecha de Inicio</th>
        <th>Fecha de Terminación</th>
        <th>Líder</th>
        <th>ID Líder</th>
        <th>Facultad</th>
        <th>Fase</th>
        </tr>
      </thead>
      <tbody>
        {data &&
         data.consultaProyectos.map((u) => {
            return (
              <tr key={u._id}>
                <td>{u.nombreDelProyecto}</td>
                <td>{u.objetivosGenerales}</td>
                <td>{u.objetivosEspecificos}</td>
                <td>{u.presupuesto}</td>
                <td>{u.fechaInicio}</td>
                <td>{u.fechaTerminacion}</td>
                <td>{u.nombreLider}</td>
                <td>{u.idDelLider}</td>
                <td>{u.facultad}</td>
                <td>{u.faseProyecto}</td>
              </tr>
            )
        })}
      </tbody>
    </table>
  </div> 
    );
 };


 export default FiltroProyectos;