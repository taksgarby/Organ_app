import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const AboutUs = () => {

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
        <div>Sara Qureshi
            Hometown: Redditch, just outside Birmingham, England.
            Favourite Food: Too many to choose from! Depends on the cuisine.
            Find out more about Sara on: Sara's portfolio url
             
        </div>
        <div>Dahlia Valle Peterson
            Hometown: California, USA
            Favourite Food: Thai cuisine
            Find out more about Dahlia on: Darhlia's linkedin url
        </div>
        <div>Takako Onozuka
            Hometown: Niigata, Japan
            Favourite Food: My current favourite is Korean
            
            </div>  
        </FlexContainer>

        </>
     );
}
 
export default AboutUs;
