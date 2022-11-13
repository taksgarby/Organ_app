import React from "react";
import { Link } from "react-router-dom";
import Button from "./Re-usable/Button";

const NavBar = () => {

    return ( 
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/:id">Organ details</Link>
                </li>
            </ul>
        </>
     );
}
 
export default NavBar;