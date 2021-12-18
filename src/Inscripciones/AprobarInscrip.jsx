import React from 'react';
import { useQuery, gql} from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inscrip from './AceptarInscripc';




const ConsultarInscrip = () => {

    const INS = gql`
    query {
    filtroInscripciones {
        idInscripcion
        idProyecto
        identificacion
        fechaEgreso
        fechaIngreso
    estadoInscripcion
    }
    }

    `;

    const { loading, error, data } = useQuery(INS)
    if (loading) return "<h1>Cargando</h1>"
  
  
    return (<table className="table">
      <thead>
        <tr>
          <th>idInscripcion</th>
          <th>idProyecto</th>
          <th>Identificacion</th>
          <th>Fecha de egreso</th>
          <th>Fecha de egreso</th>
          <th>Estado de inscripción</th>
        </tr>
        {data.filtroInscripciones.map((inscrip) => <Inscrip filtroInscripciones={inscrip} />)}
      </thead>
    </table>)
  } 

export default ConsultarInscrip