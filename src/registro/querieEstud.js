import { gql } from '@apollo/client';



const GET_ESTUDIANT = gql`
query { obtenerEstudiantes
    (rol:"Estudiante") {
    identificacion
    nombre
    apellido
    rol
    correoElectronico
    estado
  }
}
`;

export {GET_ESTUDIANT};