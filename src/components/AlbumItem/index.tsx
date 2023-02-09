import React from  'react';
import { Link } from "react-router-dom";
import C from './styles';

type ScreenProps = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const AlbumItem = ({title, id}: ScreenProps) =>{

    return(
        <C.Container>
            <Link to={`/album/${id}`} className="album">
                {title}
            </Link>
        </C.Container>
    )
}

export default AlbumItem;

