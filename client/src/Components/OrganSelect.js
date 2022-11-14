import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getOrgans, organById } from "./OrgansService.js";
import Button from "./Re-usable/Button.js";
import { Link } from "react-router-dom";

const OrganSelect = () => {
    const [organ, setOrgan] = useState([]);
    const { id } = useParams()
    

     useEffect (() => {
        organById(id)
        .then((info) => {
            setOrgan(info) 
        }
       )
    },[id]);

    return ( 
        <div>
            <div>
                <h2>{organ.name}</h2>
                <img src={organ.diagram} alt="Organ-diagram" width="350"/>
            </div>
            <div>
            <Link to={`/${organ._id}/quiz`}><Button text="Start Quiz"/></Link>
            </div>
        </div>
     );
}
 
export default OrganSelect;