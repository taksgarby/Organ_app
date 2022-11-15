import React from "react";
import { Link } from "react-router-dom";


const AboutUs = () => {

    const Story = () => {
        <p>
           We are commited to educating young people in the field of biology. We came up with the idea of this web app
           during discussion about how to get young people more excited about learning basic facts about our own body. We believe this 
           interactive website will engage and educate the future of our generation.  
        </p>
    }


    return ( 
        <>
        <h2>About Us</h2>
        {Story}
        </>
     );
}
 
export default AboutUs;
