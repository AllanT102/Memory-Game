import React from "react";
import Card from "./Card"

const Gameboard = (props) => {

    const renderCards = () => {
        let cards = []
        props.pokemon.forEach((card) => cards.push(<Card info={card}/>))
        return cards;
    }

    return (
        <div style={{border: "solid blue 2px"}}>
            {renderCards()}
        </div>
    )
}

export default Gameboard;