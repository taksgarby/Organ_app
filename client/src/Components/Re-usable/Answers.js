import React from "react";
import Button from "./Button";

const Answers = ({quiz, current, handleButtonClick}) => {
    console.log(current);
    return ( 
        <>
            <Button value={quiz[current].answer} onClick={handleButtonClick} text={`Correct answer: ${quiz[current].answer}`}/>
            <Button value={!quiz[current].answer} onClick={handleButtonClick} text={`Wrong answer: ${!quiz[current].answer}`}/> 
        </>
     );
}
 
export default Answers;