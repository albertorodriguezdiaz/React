import React from 'react';

const Cita = ({cita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">
                {cita.paciente}
            </h3>
            <p className="card-text"><span>Paciente: </span> {cita.paciente} </p>
            <p className="card-text"><span>Acompañante: </span> {cita.aconpanante} </p>
            <p className="card-text"><span>Fecha: </span> {cita.fecha} </p>
            <p className="card-text"><span>Hora: </span> {cita.hora} </p>
            <p className="card-text"><span>Sintomas: </span></p>
            <p className="card-text"> {cita.sintomas} </p>
            <button type="button" class="btn btn-warning">Eliminar</button>
        </div>
    </div>
);
 
export default Cita;