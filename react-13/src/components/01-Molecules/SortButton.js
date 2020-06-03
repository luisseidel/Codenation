import React from "react";
import "./SortButton.css";
import { Button } from "../00-Atoms/Button"

class SortButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.name = props.name;
        this.iconName = props.iconName;
    }

    render() {
        return (
            <div>
            <Button icon={this.iconName}/>
            </div>
        );
    }
}
/*<i id="ascOrder" class="fa fa-sort-asc" hidden="true"/>*/

export default SortButton;