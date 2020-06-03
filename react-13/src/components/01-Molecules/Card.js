import React from "react";
import CardImage from "../00-Atoms/CardImage";
import CardTitle from "../00-Atoms/CardTitle";
import CardBody from "../00-Atoms/CardBody";
import CardText from "../00-Atoms/CardText";

import "./Card.css";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return (
            <div className="card">
                <CardImage />
                <CardBody>
                    <CardTitle />
                    <CardText />
                </CardBody>
            </div>
        );
    }
}

export default Card;