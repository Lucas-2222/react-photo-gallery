import axios from "axios";
import qs from "qs";

const url = `https://jsonplaceholder.typicode.com/`;

const apiGetAxios = async (endpoint: string, body: any[] = []) => {
    const response  = await axios.get(`${url+endpoint}?${qs.stringify(body)}`)
    return response.data;
}

const useApi = () => ({
    getAlbums: async () => {
        let response = await apiGetAxios('albums')
        return response;
    },
    getAlbum: async (idAlbum: string) => {
        let response = await apiGetAxios(`albums/${idAlbum}`)
        return response;
    },
    getPhotosAlbums: async (idAlbum: number) => {
        let response = await apiGetAxios(`albums/${idAlbum}/photos`)
        console.log(response)
        return response;
    },
    getPhotos: async (idPhoto: string) => {
        let response = await apiGetAxios(`photos/${idPhoto}`)
        return response;
    }

})

export default useApi;