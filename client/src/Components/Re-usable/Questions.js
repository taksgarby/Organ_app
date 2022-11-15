import React from "react";

const Questions = ({quiz, current}) => {

    return ( 
        <>
            <h2>Question:</h2>
            <h3>{quiz[current].question}</h3>
        </>
     );
}
 
export default Questions;