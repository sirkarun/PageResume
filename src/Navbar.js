import React from "react";
import NavItems from './Navitems';

function Navbar(){
    

    return (
        <nav>
            <ul>
                <NavItems item="Home" tolink="/"></NavItems>
                <NavItems item="About" tolink="/about"></NavItems>
                <NavItems item="Workexp" tolink="/workexp"></NavItems>
                <NavItems item="Education" tolink="/education"></NavItems>
                <NavItems item="Skill" tolink="/skill"></NavItems>
                <NavItems item="Contact" tolink="/contact"></NavItems>
            </ul>
        </nav>
    )
}

export default Navbar