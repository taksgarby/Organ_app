import React from "react";
import Button from "./Button";

const Answers = ({quiz, current, handleButtonClick}) => {

    return ( 
        <>
            <Button value={quiz[current].answer} onClick={() => handleButtonClick(quiz[current].answer)} text={`Correct answer: ${quiz[current].answer}`}/>
            <Button value={!quiz[current].answer} onClick={() => handleButtonClick()} text={`Wrong answer: ${!quiz[current].answer}`}/> 
        </>
     );
}
 
export default Answers;