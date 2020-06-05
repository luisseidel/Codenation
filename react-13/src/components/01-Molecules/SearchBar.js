import React from 'react';
import './SearchBar.css';
import InputText from "../00-Atoms/InputText";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    handleKeyPress() {
        
    }

    render() {
        return (
            <div>
                <InputText className="searchBar" placeholder={this.props.placeholder} />
                <i className={this.props.iconName} />
            </div>
        )
    }

}

export default SearchBar;