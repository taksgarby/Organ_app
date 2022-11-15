import React from "react";
import Button from "./Button";

const Answers = ({quiz, current}) => {
    return ( 
        <>
            <Button value={quiz[current].answer} text={`Correct answer: ${quiz[current].answer}`}/>
            <Button value={!quiz[current].answer} text={`Wrong answer: ${!quiz[current].answer}`}/> 
        </>
     );
}
 
export default Answers;