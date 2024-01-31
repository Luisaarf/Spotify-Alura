import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div class="playlist-container">
        <div id="result_playlists">
            <div class="playlist"> 
                <h1 id="greeting">Boa tarde</h1>
                <h2 class="session">Navegar por todas as seções</h2>
            </div>
            <div class="offer_scroll-container">
                {/* playlist cards */}
                <div class="offer-list">
                </div>
            </div>
        </div>
        {/* playlist artist */}
    </div>
  );
}

export default Main;