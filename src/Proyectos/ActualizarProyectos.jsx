import { gql, useMutation } from "@apollo/client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import '../Components/Avances/GestionDeAvances.css'



const ACTUALIZAR_PROYECTO = gql`
mutation cambiarProyecto( $idLider: Int, $idProyecto: String, $nombreDelProyecto: String, $objetivosGenerales: String, $objetivosEspecificos: String, $presupuesto: Int) 
  {
    actualizarProyecto(idLider: $idLider, idProyecto: $idProyecto, proyecto:{nombreDelProyecto: $nombreDelProyecto, objetivosGenerales: $objetivosGenerales, objetivosEspecificos: $objetivosEspecificos, presupuesto: $presupuesto})
}
`
const ActualizarProyectos = () => {
    const [modificarProyecto] = useMutation(ACTUALIZAR_PROYECTO)

    let proyecto = {
        idProyecto: "",
        nombreDelProyecto: "",
        objetivosGenerales: "",
        objetivosEspecificos: "",
        presupuesto: 0        
    }

    function confirmacion () {
        alert("Proyecto actualizado correctamente")
    }

    return(
    <div className="container-fluid col-2">
    <div className="row">
        <br />
        <br/>
        <h1 className="h1 text-align: center" >Actualizar Proyectos</h1>
        <br />
        <br />
        <form
        onSubmit={e => {
            e.preventDefault();
            modificarProyecto({variables: {
                idProyecto: proyecto.idProyecto.value,
                nombreDelProyecto: proyecto.nombreDelProyecto.value, 
                objetivosGenerales: proyecto.objetivosGenerales.value, 
                objetivosEspecificos: proyecto.objetivosEspecificos.value, 
                presupuesto: parseInt(proyecto.presupuesto.value), 
            }})

        }}>
            <div>
                <label className="h5">ID del Proyecto</label>
                <input ref = {idPro => proyecto.idProyecto = idPro} placeholder="ID proyecto a modificar" className="square"/>
            </div>
            <div>
                <label className="h5">Nombre Proyecto</label>
                <input ref = {nombreDelProyecto => proyecto.nombreDelProyecto = nombreDelProyecto} placeholder="Nombre del proyecto" className="square"/>
            </div>
            <div>
                <label className="h5">Objetivos Generales</label>
                <input ref = {objGeneral => proyecto.objetivosGenerales = objGeneral} placeholder="Objetivos generales" className="square"/>
            </div>
            <div>
                <label className="h5">Objetivos Específicos</label>
                <input ref = {objEspecifico => proyecto.objetivosEspecificos = objEspecifico} placeholder="Objetivos específicos" className="square"/>
            </div>
            <div>
                <label className="h5">Presupuesto</label>
                <input ref = {presupuesto => proyecto.presupuesto = presupuesto} placeholder="$$$$$$$$$$$" className="square"/>
            </div>
            <br></br>
            <div>
                <button className="btn btn-dark h5" onClick={confirmacion}> <FontAwesomeIcon icon={faCheckSquare}/> Actualizar proyecto</button>
            </div>

        </form>

        </div>
        </div>
    )
}

export default ActualizarProyectos






