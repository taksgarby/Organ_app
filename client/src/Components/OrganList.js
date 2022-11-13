import React from "react";
import Button from "./Re-usable/Button";
import { Link } from "react-router-dom";
import { organById } from './OrgansService.js'
import { useParams } from "react-router-dom";
import OrganSelect from "./OrganSelect";

const OrganList = ({organs, fetchOrganId}) => {
    // const { id } = useParams()

    const organList = organs.map(organ => {
        
        return (
            <div key={organ._id}>
            <Link to="/:id"><Button onClick={() => fetchOrganId(organ._id)} text={organ.name} value={organ._id}/></Link>
        </div>)
    })




    return ( 
        <section>
            <h2>Choose your organ:</h2>
                <ul>
                    {organList}
                </ul>
        </section>
     );
}
 
export default OrganList;