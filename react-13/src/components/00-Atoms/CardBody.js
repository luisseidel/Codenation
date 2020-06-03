import React from "react";

class CardBody extends React.Component {

    constructor(props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return (
            <div className="card-body">{this.children}</div>
        );
    }
}

export default CardBody;