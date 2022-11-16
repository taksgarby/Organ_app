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
flex-direction: row;
margin: 0;
padding-left: 30px;
padding-bottom: 10px;
justify-content: center;
`
return (
<div>
<Header>
    <HeaderGroup>
      <img src='https://1000logos.net/wp-content/uploads/2016/10/BBC-Logo-1.png' width='150px' height='50px'></img>
      <h1>  Organ Learning Guide
      </h1>
    </HeaderGroup>
  </Header>
  </div>
  
  );
}
 
export default Header;