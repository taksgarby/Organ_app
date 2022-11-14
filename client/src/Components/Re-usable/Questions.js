import React, {useState, useEffect} from "react";
import { organById } from "../OrgansService.js";
import { useParams } from "react-router-dom";

const Questions = ({the}) => {

    return ( 
        <>
            <h2>Question:</h2>
            <h3>{the.question}</h3>
        </>
     );
}
 
export default Questions;