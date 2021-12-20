import { useQuery,gql } from "@apollo/client";
import React from "react";
import '../Components/Avances/GestionDeAvances.css'





const ConsultarInscripciones = () => {
    const INSCRIPCIONES = gql`
    query {inscripcionesPendientes
        (estadoInscripcion: "Pendiente"){
            idInscripcion,
            idProyecto,
            identificacion,
            estadoInscripcion,
            fechaIngreso,
            fechaEgreso
        }
	}`;
  
  const { loading, error, data } = useQuery(INSCRIPCIONES)
  if (loading) return "<h1>Cargando</h1>"
  console.log(data)
   
  
  const datosTabla = data.inscripcionesPendientes.map(({idProyecto, identificacion, estadoInscripcion, fechaIngreso}) => (


    <tr>
      <td>{idProyecto}</td>
      <td>{identificacion}</td>
      <td>{estadoInscripcion}</td>
      <td>{fechaIngreso}</td>
    </tr>
  ));
  return (
  <div>
    <h1 className="h1 text-align: center">Solicitudes pendientes por aceptar</h1>
    <br></br>
    <br></br>  
  <table class="table table-hover table align-middle ">     
  <thead >
    <tr class="table-dark">
      <th>ID Proyecto</th>    
      <th>Identificación</th>
      <th>Estado de la inscripción</th>
      <th>Fecha de ingreso</th>
    </tr>
  </thead>
    <tbody>      
      {datosTabla}      
    </tbody>
  </table>
      </div>

      )

  }


  export default ConsultarInscripciones
