import React from "react";
import "./Button.css";


class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isButtonClicked: false,
        }
    }

    render() {
        return(
            <button className="button" 
                    onClick={() => this.setState({ isButtonClicked: !this.state.isButtonClicked })}>
                
                { this.props.textAction }
                
                {
                    this.state.isButtonClicked
                    ? <i className="fa fa-sort-desc" />
                    : <i className="fa fa-sort-asc" />
                }

            </button>
        );
    }
}

export default Button;