import React from "react";
import Button from "./Button";

const Answers = ({the}) => {
    return ( 
        <>
            <Button value={the.answer} text={`Correct answer: ${the.answer}`}/>
            <Button value={!the.answer} text={`Wrong answer: ${!the.answer}`}/> 
        </>
     );
}
 
export default Answers;