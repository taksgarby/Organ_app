import React, {useState} from "react";

const Button = ({text, value, onClick, isDisabled=false}) => {

    // State 
    // Prop colour
    // If clicked border prop green or red
    return ( 
        <button disabled={isDisabled} value={value} onClick={onClick}>{text}</button>
     );
}
 
export default Button;