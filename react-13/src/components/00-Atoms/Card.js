import React from "react";
import './Card.css';


export function CardTitle(props) {
    return (
        <p className="card-title">{props.titulo}</p>
    )
}

export function CardImage(props) {
    return (
        <img src={props.image} className="card-image" alt={props.alt} />
    );
}
    
export function CardBody(props) {
    return (
        <div className="card-body">{props.children}</div>
    );
}

export function CardText(props) {
    return (
        <p className="card-text">{props.contatoInfo}</p>
    )
}

export function Card(props) {
    return (
        <div key={props.id} className="card">{props.children}</div>
    );
}