import './App.css'; 
import React, {useEffect, useState} from 'react'; 
import youtube from './youtube'; 
import VideoList from './VideoList';  
import SearchBar from './Searchbar'; 
import VideoList2 from './VideoList2'; 
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component{
  
    state = { 
      videos: [], 
      selectedVideo: null
  }  

  handleSubmit = async (termFromSearchBar) => { 
    const response = await youtube.get('/search', { 
      params: { 
        q: termFromSearchBar
      }
    }) 

    this.setState({ 
      videos:response.data.items
    }) 
    console.log(response.data.items); 
    const video = response.data.items 
    console.log(video.snippet); 
    let Videolink = ''; 
    let id = '';  
    let id2 = '';
    var output = document.getElementById('searchOutput') 
    for (let i = 0; i < video.length; i++){ 
      id = video[i].id.videoId 
      if (id == undefined){ 
        /*id2 = video[i].snippet.thumbnails.medium.url
        console.log(id); 
        Videolink += `<img heigth=136 width=136 src="${id2}" allowFullScreen></img>`/*/
      } 
      if (id != undefined){
        Videolink += `<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${id}" allowFullScreen></iframe>`;  
      }
    }  
    output.innerHTML = Videolink
    
  }  

  handleVideoSelect = (video) => { 
    this.setState({selectedVideo: video})
  } 




  

  render(){
    return (
      <><div class="App">
        <div class="searchBar">
          <SearchBar handleFormSubmit={this.handleSubmit} />
          <div class="searchOutput" id="searchOutput"></div>
          <div class="hr"><hr></hr></div>
          <div class="suggestedVideos"> 
            <div class="suggested">
              <div class="suggestedTab"><label>Suggested</label></div> 
              <div class="vr"></div>
              <div class="sugVid" id="sugVid">
                <VideoList></VideoList>
              </div> 
            </div>
            <div class="videos">
              <div><label></label></div>
              <div class="trendingVideos">

              </div>
            </div>
          </div>
        </div>
      </div><div class="sideBar">
          <a class="nav-link" href='https://github.com/CaelDutson'><h6>Github</h6></a>
          <a class="nav-link" href='https://www.linkedin.com/in/cael-dutson-86807b249/'><h6>Help</h6></a>
          <a class="nav-link" href='https://www.linkedin.com/in/cael-dutson-86807b249/'><h6>Contact</h6></a>
          <a class="nav-link" href='https://www.linkedin.com/in/cael-dutson-86807b249/'><h6>More</h6></a>
        </div></>
    );
} 
}

export default App;
