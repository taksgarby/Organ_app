import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { organById } from "./OrgansService.js";
import Questions from "./Re-usable/Questions.js";
import Answers from "./Re-usable/Answers.js";

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [score, setScore] = useState(); 

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
                    <form>
                <div>
                    <Questions the={the}/>

                </div>
                <div>
                    <Answers the={the}/>
                 </div> 
                     </form>
             </div>
         )
    })

    return ( 
        <div>
                {questionList}
        </div>
     );
}
 
export default Quiz;