import React from "react";
import { Link } from "react-router-dom";
import Button from "./Re-usable/Button";
import styled from "styled-components";

const NavBar = () => {

    const NavList = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        text-decoration: none;


    `

    return ( 
        <>
      
            <ul> 
                <NavList>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="https://www.bbc.co.uk/bitesize/topics/zmjtb9q">BBC Bitesize</a>
                </li>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                </NavList>
            </ul>
           
        </>
     );
}
 
export default NavBar;