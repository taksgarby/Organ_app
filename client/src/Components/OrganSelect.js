import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrgans, organById } from "./OrgansService.js";
import Button from "./Re-usable/Button.js";
import BulletPoints from "./Re-usable/BulletPoints.js";
import { Link } from "react-router-dom";
import Heading from "./Heading.js";

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
                <h2>{organ.name}</h2>
                <img src={organ.diagram} alt="Organ-diagram" width="350"/>
                
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