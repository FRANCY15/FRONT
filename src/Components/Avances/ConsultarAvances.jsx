import { useQuery,gql } from "@apollo/client";
import React from "react";
import '../Avances/GestionDeAvances.css'


const ConsultarAvances = () => {
    const AVANCES = gql`
    query {getAdvance
      (idProyecto: "61ad76993ffc9c46bb2b0e16"){
        idProyecto
        fechaAvance
        descripcion
        observaciones
        estudiantesInscritos
      }
           
	}`;
  
  const { loading, error, data } = useQuery(AVANCES)
  if (loading) return "Cargando"
  console.log(data)
   
  
  const datosTabla = data.getAdvance.map (({idProyecto, fechaAvance, descripcion, observaciones, estudiantesInscritos}) => (


    <tr>
      <td>{idProyecto}</td>
      <td>{fechaAvance}</td>
      <td>{descripcion}</td>
      <td>{observaciones}</td>
      <td>{estudiantesInscritos.map((estudiante)=> <ul>({estudiante.nombre})</ul>)}</td>
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
      <th>Fecha Avance</th>
      <th>Descripción</th>
      <th>Observaciones</th>
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


  export default ConsultarAvances
