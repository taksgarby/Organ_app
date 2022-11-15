import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { organById } from "./OrgansService.js";
import Questions from "./Re-usable/Questions.js";
import Answers from "./Re-usable/Answers.js";

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0); 

    const { id } = useParams()

    useEffect (() => {
        organById(id)
        .then((info) => {
            console.log(setQuiz(info.quiz)) 
        }
       )
    }, [id]);

    
    if (!quiz.length > 0) {return "Sorry loading Questions!"}

    return ( 
        <div>
            <form action="">
                <div>
                    <Questions quiz={quiz} current={current}/>
                </div>
                <div>
                    <Answers quiz={quiz} current={current}/>
                </div>
            </form>
        </div>
     );
}
 
export default Quiz;