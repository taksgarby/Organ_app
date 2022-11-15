import React from "react";

const Mark = ({quiz, mark, showMark}) => {

    const giveResults = () => {

    }
    return ( 
        <>
            <div>
                <h2>You scored {mark} out of {quiz.length}</h2>
            </div>
        </>
     );
}
 
export default Mark;