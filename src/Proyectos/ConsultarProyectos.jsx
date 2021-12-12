import { useQuery,gql } from "@apollo/client";
import React from "react";




const ConsultarProyectos = () => {
    const PROYECTOS = gql`
    query {buscarProyectoPorLider
      (nombreLider:"Claudia"){
          nombreDelProyecto,
          objetivosGenerales,
          objetivosEspecificos,
          presupuesto,
          fechaInicio,
          fechaTerminacion,
          nombreLider,
          idDelLider,
          facultad,
          faseProyecto,
          estudiantesInscritos{
            nombre,
            identificacion
            estado
            }
  
    }
  }`;
  
  const { loading, error, data } = useQuery(PROYECTOS)
  if (loading) return "<h1>Cargando</h1>"
  console.log(data)
   
  
  const datosTabla = data.buscarProyectoPorLider.map(({nombreDelProyecto, objetivosGenerales,objetivosEspecificos, presupuesto, fechaInicio, fechaTerminacion, nombreLider, idDelLider,facultad, faseProyecto, estudiantesInscritos}) => (
    <tr>
      <td>{nombreDelProyecto}</td>
      <td>{objetivosGenerales}</td>
      <td>{objetivosEspecificos}</td>
      <td>{presupuesto}</td>
      <td>{fechaInicio}</td>
      <td>{fechaTerminacion}</td>
      <td>{nombreLider}</td>
      <td>{idDelLider}</td>
      <td>{facultad}</td>
      <td>{faseProyecto}</td>
      <td>{estudiantesInscritos.map((estudiante)=>(<ul>{estudiante.nombre}</ul>))}</td>
    </tr>
  ));
  return <table class="table table-striped table-hover">
    <thead className="thead-dark">
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
      <th >Estudiantes Inscritos</th></thead>
      {datosTabla}
      </table>
  }


  export default ConsultarProyectos
