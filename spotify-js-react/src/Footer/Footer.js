import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="sign-up-bar">
                <div className="sign-up-bar_textcontent">
                    <span className="text title">Testar o Premium de graça</span>
                    <span className="text subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</span>
                </div>
                <button className="sign-up-bar_button">
                    <span>Inscreva-se grátis</span>
                </button>
            </div>
        </footer>
    );
}


export default Footer;