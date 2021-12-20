import { useQuery, useMutation, gql } from "@apollo/client";
import React from "react";
import '../Components/Avances/GestionDeAvances.css'
import Proyecto from './AprobarProyectos'



const VerProyectos = () => {
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
              },
            estadoProyecto  
    }
  }`;
  

  const { loading, error, data } = useQuery(PROYECTOS)
  if (loading) return "<h1>Cargando</h1>"
  // console.log(data)
   
  
  return (
/*   <div>
    <br></br>
    <br></br>   */
  <table class="table table-hover table align-middle ">     
  <thead >
    <tr class="table-dark">
      <th>ID Proyecto</th>    
      <th>Proyecto</th>
      <th>Objetivos Generales</th>
      <th>Objetivos Específicos</th>
      <th>Presupuesto</th>
      <th>Fecha de Registro</th>
      <th>Fecha de Terminación</th>
      <th>Líder</th>
      <th>ID Líder</th>
      <th>Facultad</th>
      <th>Fase</th>
      <th>Estudiantes Inscritos</th>
      <th>Aprobar</th>

    </tr>
  
       
      {data.consultaProyectos.map((proyecto) => <Proyecto project={proyecto}/>)}      
      </thead>
  </table>
/*       </div> */

      )


  }



  export default VerProyectos
