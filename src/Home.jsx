import React from 'react'
import proyectos from './assets/img/proyectos.jpg'


function PagPal() {
    return (
        <div className="container md-6; style">
            <br />
            <h1>Bienvenidos al Sistema de Gestión de Proyectos de la Universidad de Antioquia</h1>
            <img src={proyectos} className="imagen1" alt='...'/>
        </div>
    )
}

export default PagPal