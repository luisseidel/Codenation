import React from "react";
import SearchBar from "../01-Molecules/SearchBar";
import SortButton from "../01-Molecules/SortButton";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <SearchBar placeholder="Find by name..."/>
                <SortButton iconName="fa fa-sort-asc"/>
                <SortButton iconName="fa fa-sort-asc"/>
                <SortButton iconName="fa fa-sort-asc"/>
            </div>
        );
    }
}

export default NavBar;