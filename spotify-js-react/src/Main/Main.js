import React, {useState, useEffect}from "react";
import "./Main.css";
import Cards from "./Cards/Cards";
import Artists from "./Artists/Artists";

const Main = (props) => {

  const [artistName, setArtistName] = useState('');
  const [artistImage, setArtistImage] = useState('');
  const [isPlaylistsVisible, setIsPlaylistsVisible] = useState(true);

  const displayResults = (result) => {
    result.forEach(artist => {
      setArtistName(artist.name);
      setArtistImage(artist.urlImg);
    })
  }

  const requestAPI = (searchTerm) => {
    const url = `http://localhost:5000/artists?name_like=${searchTerm}`
    fetch(url)
        .then(response => response.json())
        .then(result => displayResults(result))
  }

  useEffect(() => {
    if(props.searchValue === ''){
      setIsPlaylistsVisible(true);
      return;
    }
    setIsPlaylistsVisible(false);
    requestAPI(props.searchValue)
  }, [props.searchValue]);

  return (
    <div className="playlist-container">
      {isPlaylistsVisible ?  
       <div id="result_playlists" >
          <div className="playlist"> 
              <h1 id="greeting">Boa tarde</h1>
              <h2 className="session">Navegar por todas as seções</h2>
          </div>
          <div className="offer_scroll-container">
              <div className="offer-list">
                <Cards/>
              </div>
          </div>
        </div> :    
        <div id="result-artist">
        <Artists artistName={artistName} artistImage={artistImage}/>
      </div>}
    </div>   
  );
}

export default Main;