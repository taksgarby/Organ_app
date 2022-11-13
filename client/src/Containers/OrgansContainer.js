import React, { useEffect, useState } from "react";
import Heading from "../Components/Heading.js";
import { getOrgans } from "../Components/OrgansService.js";
import OrganList from "../Components/OrganList.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar.js";
import OrganSelect from "../Components/OrganSelect.js";


const OrgansContainer = () => {
    const [organs, setOrgans] = useState([]);

    useEffect(() => {
        getOrgans()
        .then((info) => 
         setOrgans(info) 
        )

    }, [organs])

    return ( 
        <Router>
            <Heading text="Educational Organ Webpage"/>
                <NavBar/>
                <Routes>

                    <Route exact path="/" element={<OrganList organs={organs} />}/>
                    <Route path="/:id" element={<OrganSelect organs={organs}/>}/>
                    </Routes>
        </Router>
     );
}
 
export default OrgansContainer;