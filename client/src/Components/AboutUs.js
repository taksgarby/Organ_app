import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const AboutUs = ({contributers}) => {

    const eachPerson = contributers.map(contributer => {
        return (
            <div key = {contributer._id}>
                <p>Name: {contributer.name}</p>
                <p>Hometown: {contributer.Hometown}</p>
                <p>Favourite Food: {contributer.FavouriteFood}</p>
                <p>Find more about {contributer.name}: <a href={contributer.MoreInfo}>{contributer.MoreInfo}</a></p>
                <hr></hr>
            </div>
        )
    })

    const HeaderTwo = styled.p`
        margin: 2em;
        padding: 1em;
        color: #27296d;
        font-size: 2em;
    `

    const FlexContainer = styled.p`
    `


    return ( 
        <>
        <HeaderTwo>About Us</HeaderTwo>
        <p>
           We are commited to educating young people in the field of biology. We came up with the idea of this web app
           during discussion about how to get young people more excited about learning basic facts about our own body. We believe this 
           interactive website will engage and educate the future of our generation.  
        </p>
        <HeaderTwo>Contributers</HeaderTwo>
        <FlexContainer>
        <div>We are a hardworking team from diverse background </div>
        
            {eachPerson}
        </FlexContainer>

        </>
     );
}
 
export default AboutUs;
