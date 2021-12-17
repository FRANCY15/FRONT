import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const Proyecto = ({ project }) => {

    const APROBAR_PROYECTO = gql`
        mutation Mutation($idProyecto: String) {
            aprobarProyecto(idProyecto: $idProyecto)
        }
    `
    const CAMBIAR_FASE_PROYECTO = gql`
        mutation Mutation($idProyecto: String) {
            cambiarFaseProyecto(idProyecto: $idProyecto)
        }
    `
    const [aceptar] = useMutation(APROBAR_PROYECTO)
    const [cambiarFase] = useMutation(CAMBIAR_FASE_PROYECTO)

    const aprobarProject = () => {
        aceptar({ variables: { idProyecto: project.idProyecto } })
    }

    const cambiarFaseProject = () => {
        cambiarFase({ variables: { idProyecto: project.idProyecto } })
    }

    return <tr>
        <td>{project.idProyecto}</td>
        <td>{project.nombreDelProyecto}</td>
        <td>{project.objetivosGenerales}</td>
        <td>{project.objetivosEspecificos}</td>
        <td>{project.presupuesto}</td>
        <td>{project.fechaInicio}</td>
        <td>{project.fechaTerminacion}</td>
        <td>{project.nombreLider}</td>
        <td>{project.facultad}</td>
        <td>{project.faseProyecto}</td>
        <td>{project.estudiantesInscritos.map((estudiante)=> <ul>({estudiante.nombre})</ul>)}</td>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                <td>{project.faseProyecto === null ? <button type="submit" className="btn btn-primary" onClick={aprobarProject}>Autorizar</button> : 
                project.faseProyecto === "Inicial" ? <button className="btn btn-primary" onClick={cambiarFaseProject}>Desarrollar</button> : 
                project.faseProyecto === "En desarrollo" ? <button className="btn btn-primary" onClick={cambiarFaseProject}>Finalizar</button> : null}
            {/* <button className="btn btn-danger" onClick={eliminarUser}>Eliminar</button> */}</td>
                </div>
            </div>
        </div>
        
    </tr>
}

export default Proyecto