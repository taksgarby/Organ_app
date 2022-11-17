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
            <Button value={quiz[number].answer} color = {quiz[number].isAnswered ? "green" : null } onClick={() => handleButtonClick(quiz[number].answer)} text={correct()}/>
            <Button value={!quiz[number].answer} color={!quiz[number].isAnswered ? null : "red"}  onClick={() => handleButtonClick()} text={incorrect()}/> 
        </>
     );
}
 
export default Answers;