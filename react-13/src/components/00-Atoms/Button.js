import React from "react";
import "./Button.css";


export function Button(props) {
    return (
        <button className="button" >
            { props.name }
            <i className={ props.icon }></i>
        </button>
    );
}