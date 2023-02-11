import React from "react";
import SearchBar from './SearchBar'; 

const Nav = (props) =>{
    return(
        <div>
            <nav className="navbar">
            <SearchBar onSearch={props.onSearch}/>
            </nav>
        </div>
    )
}

export default Nav;