import React from "react";

const Questions = ({quiz, number}) => {

    return ( 
        <>
            <h2>Question:</h2>
            <h3>{quiz[number].question}</h3>
        </>
     );
}
 
export default Questions;