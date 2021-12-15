import { gql } from '@apollo/client';

const GET_INSCRIPCIONES = gql`
  query Inscripciones {
    Inscripciones {
      _id
      idInscripcion
      estadoInscripcion
      estudiante {
        _id
        nombre
        apellido
        correo
      }
      idproyecto {
        _id
        nombre
        lider {
          _id
        }
      }
    }
  }
`;

export { GET_INSCRIPCIONES };