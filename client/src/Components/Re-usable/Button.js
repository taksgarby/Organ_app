import React from "react";

const Button = ({text, value, onClick, isDisabled=false}) => {
    return ( 
        <button disabled={isDisabled} value={value} onClick={onClick}>{text}</button>
     );
}
 
export default Button;