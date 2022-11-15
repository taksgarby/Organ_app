import React, { useEffect, useState } from "react";
import Heading from "../Components/Heading.js";
import { getOrgans, organById } from "../Components/OrgansService.js";
import OrganList from "../Components/OrganList.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar.js";
import OrganSelect from "../Components/OrganSelect.js";
import Quiz from "../Components/Quiz.js";
import Header from "../Components/Re-usable/Header.js";
import AboutUs from "../Components/AboutUs.js";


const OrgansContainer = () => {
    const [organs, setOrgans] = useState([]);
   

    useEffect(() => {
        getOrgans()
        .then((info) => 
         setOrgans(info) 
        )

    }, [])

    

    return ( 
        <Router>
            <Header />
            <NavBar/>
            <Heading text="Educational Organ Webpage"/>
         
                
                <Routes>

                    <Route exact path="/" element={<OrganList organs={organs} />}/>
                    <Route path="/:id" element={<OrganSelect/>}/>
                    <Route path="/:id/quiz" element={<Quiz/>}/>
                    <Route exact path="/AboutUs" element={<AboutUs/>} />

                </Routes>
                
        </Router>
     );
}
 
export default OrgansContainer;