import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Button = ({text, value, color, onClick, isDisabled=false}) => {
    const [isActive, setisActive] = useState(false);

    
    useEffect (() => {
    }, [onClick]);  
    

    const changeColour = () => {
        
        setisActive(!isActive);
    }; 
    
        
       

    const Button = styled.button`
        background-color: ${(props) => isActive ? props.color : "white"};
        margin: 5px;
        padding: 1em;
        border-radius: 1em;
        &:hover {
    background: purple;
  }
    `  

    return ( 
        <Button disabled={isDisabled} color={color} value={value} onClick={()=> onClick() || changeColour()}>{text}</Button>
     );
}
 
export default Button;