import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getOrgans, organById } from "./OrgansService.js";

const Quiz = ({organs}) => {
    const [questions, setQuestions] = useState([]);
    const { id } = useParams()

    useEffect (() => {
        organById(id)
        .then((info) => {
            console.log(setQuestions(info)) 
        }
       )
    },[id]);

    return ( 
        <>
        <h1>{questions.name}</h1>
        </>
     );
}
 
export default Quiz;