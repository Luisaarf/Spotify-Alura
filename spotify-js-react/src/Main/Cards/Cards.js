import React from 'react';
import './Cards.css';
import CardsJson from './Cards.json';
const Cards = () => {
    return(
        <div>
            {/* {(() => {
                const cardsArray = [];
    
                for (let i = 0; i <= CardsJson.cards.length; i++) {
                    // let nameCard = CardsJson.cards[i].cardName;
                    // console.log(nameCard);
                    cardsArray.push(
                    <a href="" className="cards">
                        <div className={`cards`}>
                            <img src={`${CardsJson.cards[i].src}`} alt=""/>
                            <span>{`${CardsJson.cards[i].title}`}</span>
                        </div>
                    </a>
                );
                }
    
                return cardsArray;
            })()} */}
        </div>
    )
}



export default Cards;