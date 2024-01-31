import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCompactDisc, faGlobe } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";
import logoSpotify from '../assets/icons/logo-spotify.png';

const Sidebar = () => {
    return (
        <div class="sidebar">
        <nav class="sidebar_navigation">
            <div class="logo">
                <a href="">
                    <img src={logoSpotify} alt="Logo do Spotify"/>
                </a>
            </div>
                <ul>
                    <li>
                        <a href="">
                            <span class={faHome}></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class={faSearch}></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
        </nav>

        <div class="sidebar_library">
            <div class="library_content"> 
                <button class="library_button"> 
                    <span class={faCompactDisc}></span> 
                    <span>Sua Biblioteca</span>
                </button>
                <button class="add_playlist_button"> 
                    <span class="fa-solid fa-plus"></span>
                </button>
            </div>
            <section class="section-playlist">
                <div class="section-playlist_content">
                    <div class="call4-action create-playlist">
                        <span class="text title">Crie sua primeira playlist</span>
                        <span class="text subtitle">É facil, vamos te ajudar</span>
                        <button class="section-playlist_button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                    <div class="call4-action explore-podcast">
                        <span class="text title">Que tal seguir um podcast novo?</span>
                        <span class="text subtitle">Avisaremos você sobre novos episódios.</span>
                        <button class="section-playlist_button">
                            <span>Explore podcasts</span>
                        </button>
                    </div>
                </div>
            </section>
            <section class="bottom-sidebar">
                <div class="cookies">
                    <a href="">Cookies</a>
                </div>
                <div class="languages">
                    <button class="languages_button">
                        <span class={faGlobe}></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
        </section>
        </div>
    </div>
    )
    
}

export default Sidebar;