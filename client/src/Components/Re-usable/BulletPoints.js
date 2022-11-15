import React from "react";

const BulletPoints = ({ facts }) => {
    if (!facts) { return null }
    const lielements = facts.map((fact, index) => {
        return (<li key={index}>{fact} </li>)
    })
    return (
        <ul>
            {lielements}
        </ul>
    )
}
export default BulletPoints; 
