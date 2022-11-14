import React from "react";
import { useParams } from "react-router-dom";

const OrganSelect = ({organ}) => {
    
    
    return ( 
        <div>
            <h2>{organ.name}</h2>
            <img src={organ.diagram} alt="Organ-diagram" width="350"/>
        </div>
     );
}
 
export default OrganSelect;