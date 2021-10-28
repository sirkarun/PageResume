import React from "react";
import {Link} from 'react-router-dom';
function NavItems(props){
    return(
        <li id={props.item}>
            <Link to ={props.tolink}>{props.item}</Link>
        </li>
    )
}

export default NavItems