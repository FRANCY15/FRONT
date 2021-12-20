import { gql } from '@apollo/client';


const GET_AVANCE = gql`
query FiltroAvances {
  filtroAvances {
    idProyecto
    fechaAvance
    descripcion
    observaciones
    estudiantesInscritos
  }
}
  `;

export {GET_AVANCE};