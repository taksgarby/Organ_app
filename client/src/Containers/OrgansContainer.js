import React, { useEffect, useState } from "react";
import Heading from "../Components/Heading.js";
import { getOrgans, organById, postOrgans } from "../Components/OrgansService.js";
import OrganList from "../Components/OrganList.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar.js";
import OrganSelect from "../Components/OrganSelect.js";
import Quiz from "../Components/Quiz.js";


const OrgansContainer = () => {
    const [organs, setOrgans] = useState([]);
    const [organ, setOrgan] = useState([]);

    useEffect(() => {
        getOrgans()
        .then((info) => 
         setOrgans(info) 
        )

    }, [])

    function fetchOrganId (id) {
        organById(id)
        .then((info) => {
            setOrgan(info) 
        }
       )
    }

    return ( 
        <Router>
            <Heading text="Educational Organ Webpage"/>
                <NavBar/>
                
                <Routes>

                    <Route exact path="/" element={<OrganList organs={organs} fetchOrganId={fetchOrganId}/>}/>
                    <Route path="/:id" element={<OrganSelect organ={organ}/>}/>
                    

                    </Routes>
                <Quiz organs={organs}/>
        </Router>
     );
}
 
export default OrgansContainer;