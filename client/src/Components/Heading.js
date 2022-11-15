import React from "react";
import styled from "styled-components";

const Heading = ({text}) => {

 const HeadingText = styled.h1`
  text-align: center; 
  font-size: 1.5em;
  color: #27296d; 
  margin: 1.5em;
  padding: 1em
  font-family: Helvetica;
`

    return ( 
        <>
            <HeadingText>{text}</HeadingText>

        </>
     );
}
 
export default Heading;
