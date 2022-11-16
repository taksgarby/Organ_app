import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";

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
font-size: 1.5em;
`
const FlexContainer = styled.div`
box-sizing:border-box;
width:100%;
margin: 1em;
border-style: outset;

padding:20px;
display:flex;
flex-direction:row;
justify-content:space-around;
font-size: 1.3em;
`
const ContributerName = styled.p`
    color: ${(props)=>props.color}

`

const AboutUs = ({contributers}) => {


    const eachPerson = contributers.map(contributer => {
        return (
            <div key = {contributer._id}>
                <ContributerName color="#27296d"><strong>{contributer.name}</strong></ContributerName>
                <p>Hometown:</p>
                    <p> {contributer.Hometown}</p>
                <p>Favourite Food:</p>
                <p>{contributer.FavouriteFood}</p>
                <p>Find more about: </p>
                <p><a href={contributer.MoreInfo}>{contributer.name}</a></p>
     
            </div>
        )
    })


  


    return ( 
        <>
        <Heading text={"About Us"}/>
        <HeaderTwo>About this app</HeaderTwo>
        <ParaText>
        We have created an app for BBC Bitesize that will teach children about organs. Our target audience is children aged 14-16. In addition to providing key information about each organ, we have created an interactive quiz they can use to test their knowledge. Each organ comes with its own page that has a diagram  and a bullet point list of key take aways about the organ. 
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



