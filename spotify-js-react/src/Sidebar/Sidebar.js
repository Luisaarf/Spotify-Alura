import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCompactDisc, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";
import logoSpotify from '../assets/icons/logo-spotify.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar_navigation">
            <div className="logo">
                <a href="">
                    <img src={logoSpotify} alt="Logo do Spotify"/>
                </a>
            </div>
                <ul>
                    <li>
                        <a href="">
                            <span className="faIcon"><FontAwesomeIcon icon={faHome} /></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="faIcon"><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
        </nav>

        <div className="sidebar_library">
            <div className="library_content"> 
                <button className="library_button"> 
                    <span className="faIcon"><FontAwesomeIcon icon={faCompactDisc} /></span> 
                    <span>Sua Biblioteca</span>
                </button>
                <button className="add_playlist_button"> 
                    <span className="faIcon"><FontAwesomeIcon icon={faPlus} /></span>                </button>
            </div>
            <section className="section-playlist">
                <div className="section-playlist_content">
                    <div className="call4-action create-playlist">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É facil, vamos te ajudar</span>
                        <button className="section-playlist_button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                    <div className="call4-action explore-podcast">
                        <span className="text title">Que tal seguir um podcast novo?</span>
                        <span className="text subtitle">Avisaremos você sobre novos episódios.</span>
                        <button className="section-playlist_button">
                            <span>Explore podcasts</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bottom-sidebar">
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages_button">
                        <span className="faIcon"><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
        </section>
        </div>
    </div>
    )
    
}

export default Sidebar;