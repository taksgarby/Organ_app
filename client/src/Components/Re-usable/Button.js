import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Button = ({text, value, color, onClick, isDisabled=false}) => {
    const [isActive, setisActive] = useState(false);

    
    useEffect (() => {
    }, [onClick, isActive]);  
    
    console.log(isActive);
    console.log(onClick);



        //const changeColour = () => {
        //      if (onClick) {
        //      setisActive(true)
        //  } 
    //}
        
       
        
    

    const Button = styled.button`
        background-color: ${(props) => isActive ? props.color : "white"};
    `  
    // If clicked border prop green or red
    return ( 
        <Button disabled={isDisabled} color={color} value={value} onClick={onClick}>{text}</Button>
     );
}
 
export default Button;