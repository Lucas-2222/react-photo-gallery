import React from "react";
import { Link } from "react-router-dom";
import C from './styles';
import Loading from "react-loading";

export type Props = {
    id: number;
    albumId: number;
    title: string;
    thumbnailUrl: string;
    url: string;
    titleAlbum: string;
}

const PhotoItem = ({id, albumId, title, thumbnailUrl, url}: Props) => {
    
    return(
        <C.Container>
            {!title && <Loading/>}
            <Link to={`/photos/${id}`}>
                <img src={thumbnailUrl} />
            </Link>
        </C.Container>
    )
}
export default PhotoItem;