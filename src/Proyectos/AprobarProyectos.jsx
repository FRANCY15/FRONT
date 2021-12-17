import { useQuery, useMutation, gql } from "@apollo/client";
import React from "react";
import '../Components/Avances/GestionDeAvances.css'


const Proyecto = ({ project }) => {
const APROBAR_PROYECTOS = gql`
mutation aprobarProyecto($idProyecto: String) {
    aprobarProyecto(idProyecto: $idProyecto)
}
`;
   
  

const [aprobar] = useMutation(APROBAR_PROYECTOS)

const aprobarElProyecto = () => {
    
    aprobar({variables: {idProyecto: project.idProyecto}})
} 

   
  
//   const datosTabla = data.consultaProyectos.map(({idProyecto, nombreDelProyecto, objetivosGenerales,objetivosEspecificos, presupuesto, fechaInicio, fechaTerminacion, nombreLider,facultad, faseProyecto, estadoProyecto}) => (


         
  ;
  return (

    <tr>

    <td>{project.idProyecto}</td>
    <td>{project.nombreDelProyecto}</td>
    <td>{project.objetivosGenerales}</td>
    <td>{project.objetivosEspecificos}</td>
    <td>{project.presupuesto}</td>
    <td>{project.fechaInicio}</td>
    <td>{project.fechaTerminacion}</td>
    <td>{project.nombreLider}</td>
    <td>{project.idDelLider}</td>
    <td>{project.facultad}</td>
    <td>{project.faseProyecto}</td>
    <td>{project.estudiantesInscritos.map((estudiante)=> <ul>{estudiante.nombre}</ul>)}</td> 
    <td>{project.faseProyecto == null ? <button className="btn btn-dark h5"
     onClick={aprobarElProyecto}>Aprobar</button> : null}</td>  
       
  </tr>      
      )


  }



  export default Proyecto
