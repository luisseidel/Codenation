import React from "react";

class CardText extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }

    render() {
        return (
            <p className="card-text">{this.text}</p>
        )
    }
}

export default CardText;