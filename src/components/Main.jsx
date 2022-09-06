import React, { useEffect, useState } from "react";
import Header from "./Header"
import Gameboard from "./Gameboard/Gameboard"

const Main = (props) => {

    let CARD_AMOUNT = 12;
    const [pokemon, setPokemon] = useState([]);
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);
    const [pokeSelected, setPokeSelected] = useState([]);

    useEffect(() => {
        const loadCards = async () => {
            setPokemon(shuffleArray(await fetchPokemon()));
        }
    }, [])

    const shuffleArray = (arr) => {

    }

    const fetchPokemon = async () => {
        let pokeArr = [];
        for (let i = 0; i < CARD_AMOUNT; i++) {
            const poke = Math.floor(Math.random() * 906);
            const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
            const imgsrc = request.sprites.front_default;
            if (imgsrc !== null) pokeArr.push(imgsrc);
            else i -= 1;
        }
    }

    return (
        <div>
            <Header />
            <Gameboard pokemon={["a", "b", "c"]}/>
        </div>
    )
}

export default Main;