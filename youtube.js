import axios from "axios"; 
const KEY = 'AIzaSyDFLOL65g3FGuBgEepPkUO9Kb-2Vm2JVYo';

export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3/', 
    params: { 
        part: 'snippet', 
        maxResults: 10, 
        key: KEY
    }
})