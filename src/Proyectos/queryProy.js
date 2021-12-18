import { gql } from '@apollo/client';


const GET_PROYECTOS = gql`
query ConsultaProyectos {
    consultaProyectos {
      nombreDelProyecto
      objetivosGenerales
      objetivosEspecificos
      fechaInicio
      presupuesto
      fechaTerminacion
      idDelLider
      nombreLider
      facultad
      estadoProyecto
      faseProyecto
    }
  }
  `;

export {GET_PROYECTOS};