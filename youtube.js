import axios from "axios"; 
const KEY = 'AIzaSyBLzfozV8XWGRR-m6CihD8iVCtVZaHIDf0';

export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3/', 
    params: { 
        part: 'snippet', 
        maxResults: 10, 
        key: KEY
    }
})