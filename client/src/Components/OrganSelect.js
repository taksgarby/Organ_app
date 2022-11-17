import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrgans, organById } from "./OrgansService.js";
import Button from "./Re-usable/Button.js";
import BulletPoints from "./Re-usable/BulletPoints.js";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading.js";
import Diagram from "./Re-usable/Diagram.js";

const OrganSelect = () => {
    const [organ, setOrgan] = useState({});
    const { id } = useParams()


    useEffect(() => {
        organById(id)
            .then((info) => {
                console.log(info)
                setOrgan(info)
            }
            )
    }, [id]);

    return (
        <div>
            <Heading text={`Welcome to ${organ.name} Page`} />
            <div>
                <h2>{organ.name} Diagram</h2>
                <Diagram diagram={organ.diagram}/>

                <BulletPoints facts={organ.facts} />

            </div>
            <div>

            <Link to={`/${organ._id}/video`}><Button text="Watch Video"/></Link>
            <Link to={`/${organ._id}/quiz`}><Button text="Start Quiz"/></Link>
            </div>
        </div>
    );
}

export default OrganSelect;