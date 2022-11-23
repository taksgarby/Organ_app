import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Heading from "./Heading";

const Container = styled.div`
    display: inline-flex;
    height: 40vh;
    align-items: center;
    justify-content: center;
    margin: 0px;
   
    
`
const Choose = styled.div`
    font-weight: bold;
    font-size: 2em;
`

const Title = styled.div`
    
    display: block;
    margin: 50px;
    height: 70px;
    padding: 1px;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 1.1em;
    background: rgb(207, 159, 255, 1);
    color: white;
    
    
`

const Card = styled.div`
    height: 200px;
    margin: 50px;
    box-shadow: 5px 5px 20px purple;
    overflow: hidden;
    margin-bottom: -120px;
    &:hover {
        height: 220px;
        bottom: 1px;
        background: rgb(207, 159, 255, 1);
    }
`

const Image = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 3px;
    &:hover {
        transform: scale(0.8) rotate(-3deg);
    }

`

const Icons = ({organs}) => {

    const iconsList = organs.map((organ) => {
        return (
            <>  
                <Link to={organ._id}>
                    <div key={organ._id}>
                        <Card>
                            <Image src={organ.icon} alt="Organ-icon" />
                        </Card>
                        <Title>
                            <h2>{organ.name}</h2>
                        </Title>
                    </div>
                </Link>
            </>
        )

    })

    return ( 
        <>
            <Heading text={"Welcome!"} />

                <Choose>Choose your organ:</Choose>

            <Container>
                {iconsList}
            </Container>
        </>
        
     );
}
 
export default Icons;