import React from "react";

const OrganSelect = ({organs}) => {
    return ( 
        <div>
            <li key={organs._id}>
                <h2>{organs.name}</h2>
                <img src={organs.diagram} alt="Organ-diagram" />
                
            </li>
        </div>
     );
}
 
export default OrganSelect;