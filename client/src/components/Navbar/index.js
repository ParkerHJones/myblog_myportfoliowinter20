import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

/**
 * @author
 * @function Navbar
 */

 const Navbar=(props)=> {


    const [search,setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');
    }
 
    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchinput';


    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">AboutMe</NavLink></li>
                <li><NavLink to="/programmingportfolio">Programming Portfolio</NavLink></li>
                <li><NavLink to="/Blogdisplay">Blog</NavLink></li>
                <li><NavLink to="/Work">Work</NavLink></li>
            </ul>
            {/* <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" className="searchClass" placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')}alt="Search"/>
                </form>
            </div> */}
        </div>
    )
}

export default Navbar