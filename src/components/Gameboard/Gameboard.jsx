import React from "react";
import Card from "./Card"
import uniqid from "uniqid";
import "../styles/gameboard.css"

const Gameboard = (props) => {

    const cardOnClick = (card) => {
        let selected = props.selected;
        if (selected.includes(card.name)) {
            resetGame();
        } else {
            props.shuffle(props.pokemon);
            selected.push(card.name);
            props.select(selected);
            props.incScore(selected.length);
        }
    }

    const resetGame = () => {
        let currScore = props.currScore;
        if (props.currScore > props.currHS) props.setHS(currScore);
        props.incScore(0);
        props.select([]);
        props.resetCards();
    }
    
    const renderCards = () => {
        let cards = []
        props.pokemon.forEach((card) => cards.push(<Card info={card} key={uniqid()} onClick={cardOnClick}/>))
        return cards;
    }

    return (
        <div className="board">
            {renderCards()}
        </div>
    )
}

export default Gameboard;