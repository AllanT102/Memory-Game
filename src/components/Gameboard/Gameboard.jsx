import React from "react";
import Card from "./Card"
import uniqid from "uniqid";
import "../styles/gameboard.css"

const Gameboard = (props) => {

    const cardOnClick = () => {
        
    }

    const renderCards = () => {
        let cards = []
        props.pokemon.forEach((card) => cards.push(<Card info={card} key={uniqid()}/>))
        return cards;
    }

    return (
        <div className="board">
            {renderCards()}
        </div>
    )
}

export default Gameboard;