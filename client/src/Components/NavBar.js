import React from "react";
import { Link } from "react-router-dom";
import Button from "./Re-usable/Button";
import styled from "styled-components";

const NavBar = () => {

    const NavContainer = styled.nav `
        background-color: white;
      
      
    `
    const NavList = styled.ul `
        padding: 0.5em;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        list-style: none;
        font-size: 1.2rem;
        margin-top: 0px;
   
    `

    // const NavA = styled(Link) `
    //     &:hover {
    //     transition: all 0.2s ease-in-out;
    //     background: #fff;
    //     color: #808080;
    //   }
    // `

    return ( 
        <>
       <NavContainer>
            <ul> 
                <NavList>
                    
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="https://www.bbc.co.uk/bitesize/topics/zmjtb9q">BBC Bitesize</a>
                </li>
                <li>
                    <Link to="/AboutUs">About Us</Link>
                </li>
                
                </NavList>
            </ul>
            </NavContainer>
        </>
     );
}
 
export default NavBar;