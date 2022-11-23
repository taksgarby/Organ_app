import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { organById, updateOrgans } from "./Services/OrgansService.js";
import Questions from "./Re-usable/Questions.js";
import Answers from "./Re-usable/Answers.js";
import Mark from "./Mark.js";
import Button from "./Re-usable/Button.js";
import Heading from "./Heading.js";
import styled from "styled-components";

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [mark, setMark] = useState(0); 
    const [showMark, setShowMark] = useState(false);

    const { id } = useParams()

    useEffect (() => {
        organById(id)
        .then((info) => 
            setQuiz(info.quiz) &&
            setMark(info.marks) 
       )
        
    }, [id, number]);

    const saveMark = newMark => {
        updateOrgans(id, {"marks":newMark})
        }
    
    if (!quiz.length > 0) {return "Sorry loading Questions!"}

    const handleButtonClick = (correctAnswer) => {
        if (correctAnswer === quiz[number].answer && mark < quiz.length) {
            setMark(mark + 1)
        }
       saveMark(mark);
       const updatedQuiz = [...quiz];
       const answerToUpdate = updatedQuiz[number]
       answerToUpdate.isAnswered = true;
       const index = updatedQuiz.indexOf(answerToUpdate);
       updatedQuiz.splice(index, 1, answerToUpdate);
       setQuiz(updatedQuiz); 
       

     
        };

    const handleNextButton = () => {
        const next = number +1;

        if (next < quiz.length) {
            setNumber(next);
        } else {
            setShowMark(true);
        };

    }

    const Section = styled.div`
    margin-bottom: 12em; 
  `

    return ( 
        <Section>
           <Heading text = {"Welcome to Quiz Page"}/>
            
            { showMark ? (
                <div>
                    <Mark quiz={quiz} mark={mark} showMark={showMark} />
                </div>
                ) : (
                    <>
                    <div>
                        <Questions quiz={quiz} number={number}/>
                    </div>
                    <div>
                        <Answers quiz={quiz} number={number} handleButtonClick={handleButtonClick}/>
                        
                    </div>

                    <div>
                        <Button text="Next question" onClick={handleNextButton}/>
                    </div>
                </>
                
                )}
        </Section>
     );
}
 
export default Quiz;