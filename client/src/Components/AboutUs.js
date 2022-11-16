import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";


const AboutUs = ({contributers}) => {


    const eachPerson = contributers.map(contributer => {
        return (
            <div key = {contributer._id}>
                <p><strong>{contributer.name}</strong></p>
                <p>Hometown: {contributer.Hometown}</p>
                <p>Favourite Food: {contributer.FavouriteFood}</p>
                <p>Find more about {contributer.name}: <a href={contributer.MoreInfo}>{contributer.MoreInfo}</a></p>
                <hr></hr>
            </div>
        )
    })


    const HeaderTwo = styled.p`
        margin-bottom: 0;
        padding: 1em;
        color: #27296d;
        font-size: 2em;
    `

    const ParaText = styled.p`
        margin: 0;
        margin-left: 2rem;
        padding: 1em;
        font-size: 1.2rem;
        text-align: left;
        color: #27296d;
    `
    const SubHeader = styled.p`
        margin: 0;
        padding: 0;
        color: #5e63b6;
        font-size: 1em;
    `
    const FlexContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 15%;
        margin-right: 15%;
        text-align: left;
        color: #27296d;
        font-size: 1.2rem;
    `


    return ( 
        <>
        <Heading text={"About Us"}/>
        <HeaderTwo>About this app</HeaderTwo>
        <ParaText>
           We are commited to educating young people in the field of biology. We came up with the idea of this web app
           during discussion about how to get young people more excited about learning basic facts about our own body. We believe this 
           interactive website will engage and educate the future of our generation.  
        </ParaText>
        <HeaderTwo>Contributers</HeaderTwo>
        <SubHeader>We are a team of hardworking individuals from diverse backgrounds</SubHeader>
        <FlexContainer>
        

        
            {eachPerson}

       

        </FlexContainer>

        </>
     );
}
 
export default AboutUs;
