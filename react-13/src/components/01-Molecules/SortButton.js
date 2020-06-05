import React from "react";
import "./SortButton.css";
import Button from "../00-Atoms/Button"

class SortButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <Button textAction={this.props.textAction} />
            </div>
        );
    }
}
/*<i id="ascOrder" class="fa fa-sort-asc" hidden="true"/>*/

export default SortButton;