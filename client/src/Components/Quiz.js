import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { organById } from "./OrgansService.js";
import Button from './Re-usable/Button.js';
import Questions from "./Re-usable/Questions.js";
import Answers from "./Re-usable/Answers.js";

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const { id } = useParams()

    useEffect (() => {
        organById(id)
        .then((info) => {
            setQuiz(info.quiz) 
        }
       )
    },[id]);

    if (!quiz) {return "Sorry loading Questions!"}

    const questionList = quiz.map((the, index) => {
        return (
            <div key={index}>
                <div>
                    <Questions the={the}/>

                </div>
                    <form>
                <div>
                    <Answers the={the}/>
                 </div> 
                     </form>
             </div>
         )
    })

    return ( 
        <>
            {questionList}
        </>
     );
}
 
export default Quiz;