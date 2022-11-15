import React from "react";

const Questions = ({quiz}) => {

    return ( 
        <>
            <h2>Question:</h2>
            <h3>{quiz[0].question}</h3>
        </>
     );
}
 
export default Questions;