import React from 'react';
import './SearchBar.css';
import { InputText } from "../00-Atoms/InputText";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.placeholder = props.placeholder;
        this.iconName = props.iconName;
    }

    render() {
        return (
            <div>
                <InputText className="searchBar" placeholder={this.placeholder} />
                <i className={this.iconName} />
            </div>
        )
    }

}

export default SearchBar;