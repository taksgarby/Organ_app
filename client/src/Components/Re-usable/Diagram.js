import React from "react";
import styled, {keyframes} from "styled-components";

const Float = keyframes`
     0% {
		
		transform: translatey(0px);
	}
	50% {
		
		transform: translatey(-20px);
	}
	100% {
		
		transform: translatey(0px);
	}
`

const Container = styled.img`
    animation: ${Float} 4s infinite linear;
    margin: 2em;
`

const Diagram = ({diagram}) => {
    return ( 
        <>
            <Container src={diagram} alt="Organ-diagram" width="350" />
        </>
     );
}
 
export default Diagram;