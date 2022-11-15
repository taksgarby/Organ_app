import React from "react";
import Button from "./Re-usable/Button";
import { Form, Link } from "react-router-dom";
import styled from "styled-components";
import { organById } from './OrgansService.js'
import { useParams } from "react-router-dom";
import OrganSelect from "./OrganSelect";
import Heading from "./Heading";

const InputImg = styled.input`
height: 25px;
padding: 2px;
margin: 10px;
`

const ButtonDiv = styled.div`
display: flex;
justify-content: center;
align-item: center;
`

const OrganList = ({ organs }) => {

    const organList = organs.map(organ => {

        return (
            <ButtonDiv key={organ._id}>
                <Link to={organ._id}>
                    <InputImg type="image" value={organ._id} name={organ.id} src={organ.icon} />

                </Link>
                <p>{organ.name}</p>
            </ButtonDiv>)
    })




    return (
        <section>
        <Heading text = {"Welcome!"}/>
      
            <h2>Choose your organ:</h2>
            <ul>
                {organList}
            </ul>
        </section>
    );
}

export default OrganList;