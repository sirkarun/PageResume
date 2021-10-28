import React from "react";
import NavItems from './Navitems';

function Navbar(){
    

    return (
        <nav>
            <ul>
                <NavItems item="Home" tolink="/PageResume/"></NavItems>
                <NavItems item="About" tolink="/PageResume/about"></NavItems>
                <NavItems item="Education" tolink="/PageResume/education"></NavItems>
                <NavItems item="Skill" tolink="/PageResume/skill"></NavItems>
                <NavItems item="Contact" tolink="/PageResume/contact"></NavItems>
            </ul>
        </nav>
    )
}

export default Navbar