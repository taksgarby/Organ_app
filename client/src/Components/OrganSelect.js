import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrgans, organById } from "./OrgansService.js";
import BulletPoints from "./Re-usable/BulletPoints.js";

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
            <h2>{organ.name}</h2>
            <img src={organ.diagram} alt="Organ-diagram" width="350" />
            <BulletPoints facts={organ.facts} />
        </div>
    );
}

export default OrganSelect;