import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
list-style-type: square;
text-align: left; 
`
const Li = styled.li`
margin: 1.2em;
`

const BulletPoints = ({ facts }) => {
    if (!facts) { return null }
    const lielements = facts.map((fact, index) => {
        return (<Li key={index}>{fact} </Li>)
    })
    return (
        <Ul>
            {lielements}
        </Ul>
    )
}
export default BulletPoints; 
