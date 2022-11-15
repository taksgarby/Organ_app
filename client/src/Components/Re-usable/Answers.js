import React from "react";
import Button from "./Button";

const Answers = ({quiz}) => {
    return ( 
        <>
            <Button value={quiz[0].answer} text={`Correct answer: ${quiz[0].answer}`}/>
            <Button value={!quiz[0].answer} text={`Wrong answer: ${!quiz[0].answer}`}/> 
        </>
     );
}
 
export default Answers;