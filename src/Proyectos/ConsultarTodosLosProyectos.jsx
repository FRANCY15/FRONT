import { useQuery, gql } from "@apollo/client";
import React from "react";
import '../Components/Avances/GestionDeAvances.css'
import Proyecto from "./Proyecto"





const ConsultarTodosLosProyectos = () => {
  const PROYECTOS = gql`
    query {
        consultaProyectos {
          idProyecto,
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
            }
  
    }
  }`;

  const { loading, error, data } = useQuery(PROYECTOS)
  if (loading) return <h1>Cargando...</h1>

  if (error) {
    return <div>
      <p>Hubo un error</p>
    </div>
  }

  return (
    <div>
      <form 
      onSubmit={ e => {
        //e.preventDefault(); //esto previene que el form se mande.
      } }> 
        <br></br>
        <br></br>
        <table class="table table-hover table align-middle ">
          <thead >
            <tr class="table-dark">
              <th>ID Proyecto</th>
              <th>Proyecto</th>
              <th>Objetivos Generales</th>
              <th>Objetivos Específicos</th>
              <th>Presupuesto</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Terminación</th>
              <th>Líder</th>
              <th>Facultad</th>
              <th>Fase</th>
              <th>Estudiantes Inscritos</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.consultaProyectos.map((proyecto) => <Proyecto project={proyecto} />)}
          </tbody>
        </table>
      </form>

    </div>

  )

}


export default ConsultarTodosLosProyectos