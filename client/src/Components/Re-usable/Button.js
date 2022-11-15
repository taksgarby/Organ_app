import React from "react";
import 

const Button = ({text, value, onClick, isDisabled=false}) => {
    return ( 
        <button disabled={isDisabled} value={value} onClick={onClick}>{text}</button>
     );
}
 
export default Button;