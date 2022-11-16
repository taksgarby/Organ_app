import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Button = ({text, value, color, onClick, isDisabled=false}) => {
   

    
    useEffect (() => {
    }, [onClick]);  
    

    const changeColour = () => {
        
    }; 
    
        

    const Button = styled.button`
        background-color: ${(props) => props.color | "cream"};
        margin: 5px;
        padding: 1em;
        border-radius: 1em;
        &:hover {
    background: purple;
  }
    `
    const handleClick = () => {
        onClick();
            changeColour();
    }  

    return ( 
        <Button disabled={isDisabled} color={color} value={value} onClick={handleClick}>{text}</Button>
     );
}
 
export default Button;