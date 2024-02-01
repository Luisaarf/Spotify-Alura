import React from 'react';
import './Cards.css';
import CardsJson from './Cards.json';
import * as allImages from '../../assets/playlist/index'

const Cards = () => {

    const arrayTitles = [];
    for (let i = 0; i < 15; i++) {
        arrayTitles.push(CardsJson.cards[i].title);
    }
    const cardsArray = [];

    for (let i = 0; i <= CardsJson.cards.length - 1; i++) {
        cardsArray.push(
        <a href="" className="cards">
            <div className={`cards card${i + 1}`}>
                <img src={`${allImages[`image${i + 1}`]}`} alt=""/>
                <span>{`${arrayTitles[i]}`}</span>
            </div>
        </a> )
    }

    return(
        <section class="offer_list-item">
            {cardsArray}
        </section>
    )
}



export default Cards;
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