import { gql, useMutation } from "@apollo/client";
import React from "react";



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



    return(<div>
        <h1>Crear proyectos</h1>
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
                <label >ID del Proyecto</label>
                <input ref = {idPro => proyecto.idProyecto = idPro} placeholder="Identificador del proyecto"/>
            </div>
            <div>
                <label>Nombre Proyecto</label>
                <input ref = {nombreDelProyecto => proyecto.nombreDelProyecto = nombreDelProyecto} placeholder="Nombre del proyecto"/>
            </div>
            <div>
                <label>Objetivos Generales</label>
                <input ref = {objGeneral => proyecto.objetivosGenerales = objGeneral} placeholder="Objetivos generales"/>
            </div>
            <div>
                <label>Objetivos Específicos</label>
                <input ref = {objEspecifico => proyecto.objetivosEspecificos = objEspecifico} placeholder="Objetivos específicos"/>
            </div>
            <div>
                <label>Presupuesto</label>
                <input ref = {presupuesto => proyecto.presupuesto = presupuesto} placeholder="$$$$$$$$$$$"/>
            </div>
            <div>
                <label>Líder del proyecto</label>
                <input ref = {nombreLider => proyecto.nombreLider = nombreLider} placeholder="Nombre del líder del proyecto"/>
            </div>
            <div>
                <label>ID del líder del proyecto</label>
                <input ref = {idDelLider => proyecto.idDelLider = idDelLider} placeholder="ID del líder del proyecto"/>
            </div>
            <div>
                <label>Facultad</label>
                <input ref = {facultad => proyecto.facultad = facultad} placeholder="Facultad a la que pertenece el proyecto"/>
            </div>
            
            <div>
                <button>Registrar proyecto</button>
            </div>

        </form>


        </div>
    )
}













export default CrearProyectos






