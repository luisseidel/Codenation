import React from "react";


class CardTitle extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return(
            <h5 className="card-title">{this.title}</h5>
        );
    }
}

export default CardTitle;