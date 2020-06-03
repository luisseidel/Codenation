import React from "react";
import Card from "../01-Molecules/Card";
import './Contato.css';


class Contato extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="contato">
                <Card />
            </div>
        );
    }
}

export default Contato;