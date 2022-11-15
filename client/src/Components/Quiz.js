import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { organById } from "./OrgansService.js";
import Questions from "./Re-usable/Questions.js";
import Answers from "./Re-usable/Answers.js";
import Mark from "./Mark.js";
import Button from "./Re-usable/Button.js";

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [current, setCurrent] = useState(0);
    const [mark, setMark] = useState(0); 
    const [showMark, setShowMark] = useState(false);

    const { id } = useParams()

    useEffect (() => {
        organById(id)
        .then((info) => {
            setQuiz(info.quiz) 
        }
       )
    }, [id, current]);

    
    if (!quiz.length > 0) {return "Sorry loading Questions!"}

    const handleButtonClick = (correctAnswer) => {
        if (correctAnswer === quiz[current].answer && mark < quiz.length) {
        setMark(mark + 1)
       }
       
        // const next = current +1;
        // if (next < quiz.length) {
        //     setCurrent(next);
        // } else {
        //     setShowMark(true)
        // };
        };

    const handleNextButton = () => {
        const next = current +1;

        if (next < quiz.length) {
            setCurrent(next);
        } else {
            setShowMark(true)
        };
    }

    return ( 
        <div>
            <form action="">
            { showMark ? (
                <div>
                    <Mark quiz={quiz} mark={mark} showMark={showMark} />
                </div>
                ) : (
                    <>
                    <div>
                        <Questions quiz={quiz} current={current}/>
                    </div>
                    <div>
                        <Answers quiz={quiz} current={current} handleButtonClick={handleButtonClick}/>
                        
                    </div>

                    <div>
                        <Button text="Next question" onClick={handleNextButton}/>
                    </div>
                </>
                
                )}
                </form>
        </div>
     );
}
 
export default Quiz;