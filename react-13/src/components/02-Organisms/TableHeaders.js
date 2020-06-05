import React from "react";
import { CardTitle } from "../00-Atoms/Card";
import "./TableHeaders.css";

export function TableHeaders(props) {
    return (
            <div className="table-headers">
                    <CardTitle titulo={props.tituloNome}/>
                    <CardTitle titulo={props.tituloTelefone}/>
                    <CardTitle titulo={props.tituloPais}/>
                    <CardTitle titulo={props.tituloDataAdmissao}/>
                    <CardTitle titulo={props.tituloEmpresa}/>
                    <CardTitle titulo={props.tituloDepartamento}/>
            </div>
    );
}