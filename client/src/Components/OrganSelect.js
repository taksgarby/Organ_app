import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getOrgans, organById } from "./OrgansService.js";

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
            <h2>{organ.name}</h2>
            <img src={organ.diagram} alt="Organ-diagram" width="350"/>
        </div>
     );
}
 
export default OrganSelect;