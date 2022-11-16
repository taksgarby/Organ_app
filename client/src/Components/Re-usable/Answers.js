import React from "react";
import Button from "./Button";

const Answers = ({quiz, number, handleButtonClick}) => {
   const correct = () => {
    if (quiz[number].answer ) {
        return "True"
    } else {
       return "False"
    }
   };

   const incorrect = () => {
    if (!quiz[number].answer){
        return "True"
    } else {
       return "False"
    }
   }


    return ( 
        <>
            <Button value={quiz[number].answer} color="green" onClick={() => handleButtonClick(quiz[number].answer)} text={correct()}/>
            <Button value={!quiz[number].answer} color="red" onClick={() => handleButtonClick()} text={incorrect()}/> 
        </>
     );
}
 
export default Answers;