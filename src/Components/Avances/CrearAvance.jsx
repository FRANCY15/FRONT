import { gql, useMutation } from "@apollo/client";
import React, { Fragment } from "react";



const MUTATION_AVANCE = gql`
mutation registrarAvance( $idProyecto: String,$fechaAvance: Date, $descripcion: String, $observaciones: String, $estudiantesInscritos: String){

    crearAvance(proyecto:{idProyecto: $idProyecto, fechaAvance:$fechaAvance, descripcion: $descripcion, observaciones:$observaciones, estudiantesInscritos: $estudiantesInsritos})
}
`
const CrearAvances = () => {
    const [ingresarAvance] = useMutation(MUTATION_AVANCE)

    let avance = {
        idProyecto: "",
        descripcion: "",
        observaciones: "",
        estudiantesInscritos: ""
    }

    function confirmacion() {
        alert("Avance registrado correctamente")
    }

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 col-sm-6"></div>
                    <br />
                    <h1>Registrar Avance</h1>
                    <br />
                    <br />
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            ingresarAvance({
                                variables: {
                                    idProyecto: avance.idProyecto.value,
                                    descripcion: avance.descripcion.value,
                                    observaciones: avance.observaciones.value,
                                    estudiantesInscritos: avance.estudiantesInscritos.value
                                }
                            })
                        }}>
                    </form>
                </div>
                <div className="container-fluid">
                    <br />
                    <div className="row">
                        <div className="col-6 col-sm-6">
                            <label >ID del Proyecto</label>
                        </div>
                        <div className="col-sm-8">
                            <input ref={idPro => avance.idProyecto = idPro} placeholder="Identificador del proyecto" />
                        </div>
                        <div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-sm-6">
                                <label>Descripción</label>
                            </div>
                            <div className="col-sm-8">
                            <input ref={descripcion => avance.descripcion = descripcion} placeholder="Descripción del proyecto" />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                    <div className="row">
                        <div className="col-6 col-sm-6">
                        <label>Observaciones</label>
                        </div>
                        <div className="col-sm-8">
                        <input ref={observaciones => avance.observaciones = observaciones} placeholder="Observaciones" />
                    </div>
                    </div>
                    <div>
                    <div className="row">
                        <div className="col-6 col-sm-6">
                        <label>Estudiantes Inscritos</label>
                        </div>
                        <div className="col-sm-8">
                        <input ref={EstInsritos => avance.estudiantesInscritos = EstInsritos} placeholder="Estudiantes Inscritos" />
                        </div>
                    </div>
                    </div>
                    <br />
                    <br />
                    
                        <button className="btn btn-primary" onClick={confirmacion}>Registrar Avance</button>
                    
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}



export default CrearAvances






