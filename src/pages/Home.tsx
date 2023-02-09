import { useState, useEffect } from "react";
import useApi from "../api";
import { Albums } from "../types/Albums";
import AlbumItem from "../components/AlbumItem";
import {Loading} from '../components/Loading/Loading';

export const Home = () => {
    const api = useApi();
    const [albums, setAlbums] = useState<Albums[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        loadAlbums();
    },[])
    const loadAlbums = async () => {
        setLoading(true);
        const list = await api.getAlbums();           
        setAlbums ( list )
        setLoading(false);
    }
    return (
       <div style={{display: 'flex', flex: 1, flexDirection: 'column', height:'100%'}} > 
            {loading && <Loading color="000000"/>}

            {!loading && albums.map((item) => {
                return(
                    <AlbumItem {...item}/>
                )
                
            })}
       </div>
    )
}

