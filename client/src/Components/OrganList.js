import React from "react";
import Button from "./Re-usable/Button";

const OrganList = ({organs}) => {
    const organList = organs.map(organ => {
        return (
        <div>
         <Button value={organ._id} text={organ.name}/>
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