import { gql, useMutation } from "@apollo/client";
import React, { Fragment } from "react";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MUTATION_AVANCE = gql`
mutation registrarAvance( $idProyecto: String, $descripcion: String, $estudiantesInscritos: String){
    createAdvance(advance:{idProyecto: $idProyecto, descripcion: $descripcion, estudiantesInscritos: $estudiantesInscritos})
}
`
const CrearAvances = () => {
    const [ingresarAvance] = useMutation(MUTATION_AVANCE)

    let avance = {
        idProyecto: "",
        descripcion: "",
        estudiantesInscritos: ""
    }

    function confirmacion() {
        alert("Avance registrado correctamente")
    }

    return (<div className="container-fluid col-2">
                <div className="row">
                    <div className="col-sm-8"></div>
                    <br />
                    <br/>
                    <h1 className="h1">Registrar Avance</h1>
                    <br />
                    <br />
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            ingresarAvance({
                                variables: {
                                    idProyecto: avance.idProyecto.value,
                                    descripcion: avance.descripcion.value,
                                    estudiantesInscritos: avance.estudiantesInscritos.value,
                                }
                            })
                        }}>
                    
                <div className="container-fluid">
                    <br />
                    <div className="row">
                        <div className="col-sm-12">
                            <label className="h5">ID del Proyecto</label>
                            <br />
                        </div>
                        <div className="col-sm-8">
                            <input ref={idProyecto => avance.idProyecto = idProyecto} placeholder="Identificador del proyecto" className="square"/>
                        </div>
                        <div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-sm-6">
                                <br />
                                <label className="h5">Descripción</label>
                                <br />
                            </div>
                            <div className="col-sm-8">
                            <input ref={descripcion => avance.descripcion = descripcion} placeholder="Descripción del proyecto"  className="square" />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <br />
                        <label className="h5">Estudiantes Inscritos</label>
                        </div>
                        <div className="col-sm-8">
                        <input ref={EstudiantesInsritos => avance.estudiantesInscritos = EstudiantesInsritos} placeholder="Estudiantes Inscritos"  className="square" />
                        </div>
                    </div>
                    </div>
                    <br />
                    <br />
                        <button className="btn btn-dark h5" onClick={confirmacion}><FontAwesomeIcon icon={faCheckSquare}/> Registrar Avance </button>
                        <br />
                        <br />
                        <br />
                        <br />
                </div>
                </div>
                <br />
                <br />
            </form>
                </div>
            </div>
    )
}



export default CrearAvances