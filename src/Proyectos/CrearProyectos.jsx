import { gql, useMutation } from "@apollo/client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import '../Components/Avances/GestionDeAvances.css'



const MUTATION_PROYECTO = gql`
mutation registrarProyecto( $idProyecto: String, $nombreDelProyecto: String, $objetivosGenerales: [String], $objetivosEspecificos: [String], $presupuesto: Int, $nombreLider: String, $idDelLider: Int, $facultad: String){

    crearProyecto(proyecto:{idProyecto: $idProyecto, nombreDelProyecto:$nombreDelProyecto, objetivosGenerales: $objetivosGenerales, objetivosEspecificos:$objetivosEspecificos, presupuesto:$presupuesto, nombreLider:$nombreLider, idDelLider:$idDelLider, facultad:$facultad})
}
`



const CrearProyectos = () => {
    const [ingresarProyecto] = useMutation(MUTATION_PROYECTO)

    let proyecto = {
        idProyecto: "",
        nombreDelProyecto: "",
        objetivosGenerales: "",
        objetivosEspecificos: "",
        presupuesto: 0,
        nombreLider: "",
        idDelLider: 0,
        facultad: ""
    }

    function confirmacion () {
        alert("Proyecto registrado correctamente")
    }

    return(<div className="container-fluid col-2">
    <div className="row">
        <br />
        <br/>
        <h1 className="h1 text-align: center" >Crear Proyectos</h1>
        <br />
        <br />
        <form
        onSubmit={e => {
            e.preventDefault();
            ingresarProyecto({variables: {
                idProyecto: proyecto.idProyecto.value,
                nombreDelProyecto: proyecto.nombreDelProyecto.value, 
                objetivosGenerales: proyecto.objetivosGenerales.value, 
                objetivosEspecificos: proyecto.objetivosEspecificos.value, 
                presupuesto: parseInt(proyecto.presupuesto.value), 
                nombreLider: proyecto.nombreLider.value, 
                idDelLider: parseInt(proyecto.idDelLider.value), 
                facultad: proyecto.facultad.value
            }})

        }}>
            <div>
                <label className="h5">ID del Proyecto</label>
                <input ref = {idPro => proyecto.idProyecto = idPro} placeholder="Identificador del proyecto" className="square"/>
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
            <div>
                <label className="h5">Líder del proyecto</label>
                <input ref = {nombreLider => proyecto.nombreLider = nombreLider} placeholder="Nombre del líder" className="square"/>
            </div>
            <div>
                <label className="h5">ID del líder del proyecto</label>
                <input ref = {idDelLider => proyecto.idDelLider = idDelLider} placeholder="ID del líder del proyecto" className="square"/>
            </div>
            <div>
                <label className="h5">Facultad</label>
                <input ref = {facultad => proyecto.facultad = facultad} placeholder="Facultad" className="square"/>
            </div>
            <br></br>
            <div>
                <button className="btn btn-dark h5" onClick={confirmacion}> <FontAwesomeIcon icon={faCheckSquare}/> Registrar proyecto</button>
            </div>

        </form>

        </div>
        </div>
    )
}

export default CrearProyectos






