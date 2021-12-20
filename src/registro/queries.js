import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
query ConsultaUsuarios {
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

export {GET_USUARIOS};