import React from "react";
import styled from "styled-components";

const Heading = ({text}) => {

 const HeadingText = styled.h1`
  text-align: center; 
  font-size: 2.7em;
  color: #27296d; 
  margin: 1.5em;
  text-shadow: 2px 2px #f5c7f7;

`

    return ( 
        <>
            <HeadingText>{text}</HeadingText>

        </>
     );
}
 
export default Heading;
