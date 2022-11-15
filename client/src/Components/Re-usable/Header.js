import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Header = () => {
    const Header = styled.header`
    background-color: #8A2BE2; 
    color: white;
    font-family: Helvetica;

  `

  const HeaderGroup = styled.hgroup `
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-left: 30px;
    padding-bottom: 10px;
    font-family: Helvetica;
  `

  return (
    <div>
    <Header>
        <HeaderGroup> 
          <h1>Organ learning guide</h1>
        </HeaderGroup>

      {/* <nav>
        <ul>
          <li><Link to="/">View Stock</Link></li>
        </ul>


      </nav>
      <div id="user-info">
        <h3>Welcome back </h3>
        <h4>You have items in your basket</h4>
        <Link to="/basket">Go to Basket</Link> */}

      </Header>

      </div>
  );
}
 
export default Header;