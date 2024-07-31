import axios from "axios";

const KEY = 'AIzaSyBFg7zBP1-LzccJc_0TyNsYWk-Rodixgdc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5 ,
        key: KEY
    }
})