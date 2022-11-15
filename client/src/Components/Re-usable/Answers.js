import React from "react";
import Button from "./Button";

const Answers = ({quiz, current, handleButtonClick}) => {

    return ( 
        <>
            <Button value={quiz[current].answer} color="green" onClick={() => handleButtonClick(quiz[current].answer)} text={quiz[current].answer ? "True" : "False"}/>
            <Button value={!quiz[current].answer} color="red" onClick={() => handleButtonClick()} text={!quiz[current].answer ? "True" : "False"}/> 
        </>
     );
}
 
export default Answers;