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
            setQuiz(info.quiz) 
        }
       )
    }, [id, current]);

    
    if (!quiz.length > 0) {return "Sorry loading Questions!"}

    const handleButtonClick = () => {
        const next = current +1;
        setCurrent(next);
    }

    return ( 
        <div>
                <div>
                    <Questions quiz={quiz} current={current}/>
                </div>
                <div>
                    <Answers quiz={quiz} current={current} handleButtonClick={handleButtonClick}/>
                </div>
        </div>
     );
}
 
export default Quiz;