import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getOrgans, organById } from "./OrgansService.js";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const { id } = useParams()

    useEffect (() => {
        organById(id)
        .then((info) => {
            setQuestions(info.quiz) 
        }
       )
    },[id]);

    if (!questions) {return null}

    const questionList = questions.map(question =>{
        return (
            <div>
                <h3>Questions: {question.question}</h3>
                <h3>Answers: {question.answer}</h3>
            </div>
        )
    })

    return ( 
        <>
        <h3>{questionList}</h3>
        
        </>
     );
}
 
export default Quiz;