import React from 'react';
import { useQuery, gql} from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrearO from './CrearObs';




const Observ = () => {

    const OBS = gql`
query {
  filtroAvances {
    idProyecto
    fechaAvance
    descripcion
    observaciones
    estudiantesInscritos
  }
}

    `;

    const { loading, error, data } = useQuery(OBS)
    if (loading) return "<h1>Cargando</h1>"
  
  
    return (<table className="table">
      <thead>
        <tr>
          <th>idProyecto</th>
          <th>fechaAvance</th>
          <th>descripcion</th>
          <input ref = {observaciones => CrearO.observaciones = observaciones} placeholder="Agregar observacion"/>
          <th>ID estudiantes inscritos</th>
        </tr>
        {data.ob.map((crearO) => <CrearO ob={crearO} />)}
      </thead>
    </table>)
  } 

export default Observ