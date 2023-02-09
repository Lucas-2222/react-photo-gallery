import useApi from "../api";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Photos } from "../types/Photos";
import { BackButton } from "../components/Button/Button";

const Container = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const Photo = () => {
    const [photos, setPhotos] = useState<Photos>();
    const api = useApi();
    const params = useParams();

    const handleGetPhoto = async () => {
        let response = await api.getPhotos(params.id as string);
        setPhotos(response)
    }

    useEffect(()=>{
        handleGetPhoto();
    },[])

    return (
        
        <div>
            <BackButton />
            <h1>{photos?.title}</h1>
            <Container>
                <img src={photos?.url}/>
            </Container>
        </div>
        
    )

}