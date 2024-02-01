import React from "react";
import "./Artists.css";

const Artists = () => {
    return (
        <div class="grid-container">
            <div class="artist-card" id="">
                <div class="card-img">
                    <img id="artist-img" class="artist-img" />
                    <div class="play">
                        <span class="fa fa-solid fa-play"></span>
                    </div>
                </div>
                <div class="card-text">
                    <a title="Foo Fighters" class="vst" href="">
                        <span class="artist-name" id="artist-name"></span>
                        <span class="artist-categorie">Artista</span>
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Artists;