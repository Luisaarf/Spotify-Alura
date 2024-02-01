import React from "react";
import "./Artists.css";

const Artists = (props) => {
    return (
        <div className="grid-container">
            <div className="artist-card" id="">
                <div className="card-img">
                    <img id="artist-img" className="artist-img" src ={props.artistImage}/>
                    <div className="play">
                        <span className="fa fa-solid fa-play"></span>
                    </div>
                </div>
                <div className="card-text">
                    <a title="Foo Fighters" className="vst" href="">
                        <span className="artist-name" id="artist-name" >{props.artistName}</span>
                        <span className="artist-categorie">Artista</span>
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Artists;