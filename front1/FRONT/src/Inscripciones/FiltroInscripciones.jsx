import { useQuery,gql } from "@apollo/client";
import React from "react";




const GET_INSCRIPCIONES = () => {
    const INSCRIPCIONES = gql`
  query Inscripciones {
    Inscripciones {
      _id
      estado
      estudiante {
        _id
        nombre
        apellido
        correo
      }
      proyecto {
        _id
        nombre
        lider {
          _id
        }
      }
    }
  }
`;
  
  const { loading, error, data } = useQuery(INSCRIPCIONES)
  if (loading) return "<h1>Cargando</h1>"
  console.log(data)
   
  
  const filtro = data.Inscripciones.map(({Inscripciones, estudiante,proyecto,}) => (
    <tr>
      <td>{Inscripciones}</td>
      <td>{estudiante}</td>
      <td>{proyecto}</td>
    </tr>
  ));
  return <table class="table table-striped table-hover">
    <thead className="thead-dark">
      <th>estudiante</th>
      <th>proyecto</th>
      <button>Aprobar</button>
      <button>Rechazar</button>
      </thead>
      {filtro}
      </table>
  }


  export default  GET_INSCRIPCIONES
