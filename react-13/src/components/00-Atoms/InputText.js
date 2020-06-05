import React from "react";
import "./InputText.css";

class InputText extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        return(
            <input type="text" className="inputText" placeholder={this.props.placeholder} />
        );
    }
}

export default InputText;