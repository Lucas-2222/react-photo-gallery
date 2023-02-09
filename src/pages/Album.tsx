import React, { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import useApi from "../api";
import PhotoItem, {Props} from "../components/PhotoItem";
import styled from "styled-components";
import Loading from "react-loading";
import { BackButton } from "../components/Button/Button";

const Container = styled.div`
    width: 100%;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
`;

export const Album = () => {
    const [nameAlbum, setNameAlbum] = useState<string>(''); 
    const [album, setAlbum] = useState<Props[]>();

    const api = useApi();
    const params = useParams();
    const navigate = useNavigate();

    const handleGetAlbum = async () => {
        let response = await api.getAlbum(params.id as string)
        const {id, title} = response;
        setNameAlbum(title)
        let res = await api.getPhotosAlbums(id)
        setAlbum(res)
    }

    useEffect(()=>{
        handleGetAlbum()
    },[])

    

    return (
        <div>
            <BackButton />
            <h1>{nameAlbum}</h1>
            <Container>
                {album?.map((item)=>(
                    <PhotoItem {...item} />
                ))}
            </Container>
        </div>
    )
    
}
