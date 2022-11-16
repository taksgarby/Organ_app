import React, { useEffect, useState } from "react";
import Heading from "../Components/Heading.js";
import { getOrgans, organById } from "../Components/OrgansService.js";
import OrganList from "../Components/OrganList.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar.js";
import OrganSelect from "../Components/OrganSelect.js";
import Quiz from "../Components/Quiz.js";
import Header from "../Components/Re-usable/Header.js";

import { getContributers } from "../Components/ContributersService.js";
import AboutUs from "../Components/AboutUs.js";
import AboutUs2 from "../Components/AboutUs2.js";


const OrgansContainer = () => {
    const [organs, setOrgans] = useState([]);
    const [contributers, setContributers] = useState([]);

    useEffect(() => {
        getOrgans()
        .then((info) => 
         setOrgans(info) 
        )
        getContributers()
        .then((info)=> 
        setContributers(info))

    }, [])

     

    return ( 
        <Router>
            <Header />
            <NavBar/>
       

                <Routes>

                    <Route exact path="/" element={<OrganList organs={organs}/>}/>
                    <Route path="/:id" element={<OrganSelect/>}/>
                    <Route path="/:id/quiz" element={<Quiz/>}/>

                    <Route exact path="/AboutUs" element={<AboutUs contributers = {contributers}/>}/>
                    <Route exact path="/AboutUs2" element={<AboutUs2 contributers = {contributers}/>}/>

                </Routes>
                
        </Router>
     );
}
 
export default OrgansContainer;