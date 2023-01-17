import React from "react";
import Button from "./Re-usable/Button";
import { Form, Link } from "react-router-dom";
import styled from "styled-components";
import { organById } from './Services/OrgansService.js';
import { useParams } from "react-router-dom";
import OrganSelect from "./OrganSelect";
import Heading from "./Heading";
import Icons from "./Icons";



const OrganList = ({ organs }) => {

    const InputImg = styled.input`
height: 35px;
padding: 2px;
margin: 10px;
&:hover {
    background: purple;
  }
`

const ButtonDiv = styled.div`
display: flex;
justify-content: center;
align-item: center;
`
const Paragraph = styled.p`

    font-weight: Bold;
    justify-content: center;
     box-sizing: content-box;
    width: 10%;
    border: solid #f5c7f7 5px;
    padding: 10px;
 `
const HeaderTwo = styled.p`
    
`

const Section = styled.div`
  margin-bottom: 12em;
  color: gray;
`

    const organList = organs.map(organ => {

        return (
            <ButtonDiv key={organ._id}>
                <Link to={organ._id}>
                    <InputImg type="image" value={organ._id} name={organ.id} src={organ.icon} />
                
                </Link>
                
                <Paragraph>{organ.name}</Paragraph>

            </ButtonDiv>
            
            )
    })

 


    return (
        <Section>
            <Heading text={"Welcome!"} />

            <HeaderTwo>Choose your organ:</HeaderTwo>
            <ul>
                {organList}
            </ul>
        </Section>
    );
}

export default OrganList;