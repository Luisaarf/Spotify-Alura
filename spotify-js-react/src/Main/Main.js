import React from "react";
import "./Main.css";
import Cards from "./Cards/Cards";

const Main = () => {
  return (
    <div className="playlist-container">
        <div id="result_playlists">
            <div className="playlist"> 
                <h1 id="greeting">Boa tarde</h1>
                <h2 className="session">Navegar por todas as seções</h2>
            </div>
            <div className="offer_scroll-container">
                <div className="offer-list">
                  <Cards/>
                </div>
            </div>
        </div>
        {/* playlist artist */}
    </div>
  );
}

export default Main;