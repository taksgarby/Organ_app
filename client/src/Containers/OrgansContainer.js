import React, { useEffect, useState } from "react";
import Heading from "../Components/Heading.js";
import { getOrgans, organById } from "../Components/Services/OrgansService.js";
import OrganList from "../Components/OrganList.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar.js";
import OrganSelect from "../Components/OrganSelect.js";
import Quiz from "../Components/Quiz.js";
import Header from "../Components/Re-usable/Header.js";

import Video from "../Components/Video.js";
import Icons from "../Components/Icons.js";

import { getContributers } from "../Components/Services/ContributersService.js";
import AboutUs from "../Components/AboutUs.js";




const OrgansContainer = () => {
    const [organs, setOrgans] = useState([]);
    const [contributers, setContributers] = useState([]);

    useEffect(() => {
        getOrgans()
            .then((info) =>
                setOrgans(info)
            )
        getContributers()
            .then((info) =>
                setContributers(info))

    }, [])



    return (
        <Router>
            <Header />
            <NavBar />
            <Routes>

                <Route exact path="/cards" element={<OrganList organs={organs} />} />
                <Route path="/:id" element={<OrganSelect />} />
                <Route path="/:id/quiz" element={<Quiz />} />
                <Route exact path="/AboutUs" element={<AboutUs contributers = {contributers}/>}/>
                <Route path="/:id/video" element={<Video/>}/>
                <Route path="/" element={<Icons organs={organs}/>}/>   
             </Routes>
       
        </Router>
    );
}

export default OrgansContainer;