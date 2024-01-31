import React from 'react';
import './Header.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import iconSearch from '../assets/icons/search.png';

const Header = () => {
    return (   
        <nav className="header_navigation">
           <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Voltar"/>
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Avançar"/>
                </button>
            </div>
                <div className="header_search">
                    <img src={iconSearch} alt=""/> 
                    <input id="search-input" type="text" placeholder="O que você quer ouvir?" maxlength="800"/>
                </div>
            <div className="header_login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
         </nav>
    )
}



export default Header;
