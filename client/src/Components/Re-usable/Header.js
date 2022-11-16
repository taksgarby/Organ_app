import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import OrgansContainer from "../../Containers/OrgansContainer";
import { organById } from "../OrgansService";

const Header = () => {
    const Header = styled.header`
    background-color: #8A2BE2; 
    color: white;

  `

  const HeaderGroup = styled.hgroup `
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-left: 30px;
    padding-bottom: 10px;

  `
  // const InputIcon = styled.input`
  //     margin: ${(props)=> props.margin}
  //     height: ${(props)=> props.height}
  //     padding: ${(props)=> props.padding}
  // `
  return (
    <div>
    <Header>
        <HeaderGroup> 
          <h1><img src='https://cdn-icons-png.flaticon.com/512/4556/4556999.png' width='45px' height='45px'></img> Organ  <img src='https://cdn-icons-png.flaticon.com/512/2492/2492923.png' width='45px' height='45px'></img>  Learning  <img src='https://cdn-icons-png.flaticon.com/512/7292/7292483.png' width='45px' height='45px'></img> Guide
          </h1>
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