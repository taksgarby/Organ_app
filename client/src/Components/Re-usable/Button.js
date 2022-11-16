import React from "react";
import styled from "styled-components";

const Button = ({text, value, color, onClick, isDisabled=false}) => {

    const Button = styled.button`
        
        background-color: ${(props) => props.color};
        margin: 5px;
        padding: 1em;
        border-radius: 1em;
        &:hover {
    background: purple;
  }
    `


    return ( 
        <Button disabled={isDisabled} color={color} value={value} onClick={onClick}>{text}</Button>
     );
}
 
export default Button;