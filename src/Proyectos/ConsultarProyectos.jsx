import { useQuery,gql } from "@apollo/client";
import React from "react";
import '../Components/Avances/GestionDeAvances.css'





const ConsultarProyectos = () => {
    const PROYECTOS = gql`
    query {buscarProyectoPorLider
      (nombreLider:"Pepito"){
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

  const datosTabla = data.buscarProyectoPorLider.map(({idProyecto, nombreDelProyecto, objetivosGenerales,objetivosEspecificos, presupuesto, fechaInicio, fechaTerminacion, nombreLider,facultad, faseProyecto, estudiantesInscritos}) => (


    <tr>
      <td>{idProyecto}</td>
      <td>{nombreDelProyecto}</td>
      <td>{objetivosGenerales}</td>
      <td>{objetivosEspecificos}</td>
      <td>{presupuesto}</td>
      <td>{fechaInicio}</td>
      <td>{fechaTerminacion}</td>
      <td>{nombreLider}</td>
      <td>{facultad}</td>
      <td>{faseProyecto}</td>
      <td>{estudiantesInscritos.map((estudiante)=> <ul>{estudiante.nombre}</ul>)}</td>
    </tr>
  ));
  return (
  <div>
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
    </tr>
  </thead>
    <tbody>      
      {datosTabla}      
    </tbody>
  </table>
      </div>

      )

  }


  export default ConsultarProyectos