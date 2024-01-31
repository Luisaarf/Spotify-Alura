import React from 'react';
import './Header.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import iconSearch from '../assets/icons/search.png';

const Header = () => {
    return (   
        <nav class="header_navigation">
           <div class="navigation">
                <button class="arrow-left">
                    <img src={smallLeft} alt="Voltar"/>
                </button>
                <button class="arrow-right">
                    <img src={smallRight} alt="Avançar"/>
                </button>
            </div>
                <div class="header_search">
                    <img src={iconSearch} alt=""/> 
                    <input id="search-input" type="text" placeholder="O que você quer ouvir?" maxlength="800"/>
                </div>
            <div class="header_login">
                <button class="subscribe">Inscreva-se</button>
                <button class="login">Entrar</button>
            </div>
         </nav>
    )
}



export default Header;
