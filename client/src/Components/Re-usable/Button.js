import React, {useState} from "react";
import styled from "styled-components";

const Button = ({text, value, onClick, isDisabled=false}) => {
    const [colour, setColour] = useState([]);
    // Prop colour
    // If clicked border prop green or red
    return ( 
        <button disabled={isDisabled} value={value} onClick={onClick}>{text}</button>
     );
}
 
export default Button;