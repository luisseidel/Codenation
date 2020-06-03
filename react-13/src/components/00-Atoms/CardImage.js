import React from "react";

class CardImg extends React.Component {

    constructor(props) {
        super(props);
        this.image = props.image;
        this.alt = props.alt;
    }

    render() {
        return (
            <img src={this.image} className="card-img-top" alt={this.alt} />
        );
    }
}

export default CardImg;