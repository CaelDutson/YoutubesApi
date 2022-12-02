import youtube from "./youtube"; 
import React, {useEffect, useState} from 'react';

class VideoList extends React.Component{ 
     
    render() {   
        const VideoLists = async () => {  
        const youtubeSearch = 'https://www.googleapis.com/youtube/v3/search'; 
        const data = await youtube.get(`${youtubeSearch}`); 
        console.log(data); 
    
        let embed = 'https://www.youtube.com/embed/';  
        
        const result = data.data.items.map(doc => ({ 
            ...doc, 
            Videolink: "https://www.youtube.com/embed/"+doc.id.videoId
          }))  
        console.log(result); 
        let output = ''; 
        let id = ''
        for (let i = 0; i < result.length; i++){ 
            id = result[i].id.videoId; 
            output += `<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${id}" allowFullScreen></iframe>`;
        } 
        const bruh = document.getElementById('suggestedVids'); 
        bruh.innerHTML = output;
    }  
    VideoLists(); 
        return( 
            <div id="suggestedVids"></div>
        )
    } 
        
    

} 

export default VideoList;