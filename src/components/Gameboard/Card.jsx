import React from "react";
import "../styles/card.css"

const Card = (props) => {
    return (
        <div className="card">
            <h1>{props.info.name}</h1>
            <img src={props.info.src} alt=""/>
        </div>
    )
}

export default Card;