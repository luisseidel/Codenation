import React from "react";
import "./InputText.css";

export function InputText(props) {
    return (
        <input type="text" className="inputText" placeholder={props.placeholder} />
    );
}