import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Button = ({text, value, color, onClick, isDisabled=false}) => {
    const [isActive, setisActive] = useState(null);

    
    useEffect (() => {
    }, [onClick, isActive]);  
    

    const changeColour = () => {
        setisActive(!isActive);
        // const interval = setTimeout(() => {
        //     setisActive(!isActive);
        // }, 1000);
    }; 
    
        

    const Button = styled.button`
        background-color: ${(props) => isActive ? props.color : "cream"};
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