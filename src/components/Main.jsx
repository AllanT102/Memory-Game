import React, { useEffect, useState } from "react";
import Header from "./Header";
import Gameboard from "./Gameboard/Gameboard";
import "./styles/main.css";
import Scoreboard from "./Scoreboard/Scoreboard";

const Main = (props) => {
  let CARD_AMOUNT = 12;
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [pokeSelected, setPokeSelected] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    setPokemon(shuffleArray(await fetchPokemon()));
  }

  const shuffleArray = (arr) => {
    let currIndex = arr.length,
      randomIndex;

    while (currIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currIndex);
      currIndex--;
      [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];
    }
    return arr;
  };

  const fetchPokemon = async () => {
    let pokeArr = [];
    for (let i = 0; i < CARD_AMOUNT; i++) {
      const poke = Math.floor(Math.random() * 906);
      const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
      const json = await request.json();
      const imgsrc = json.sprites.front_default;
      const pokeName = json.name;
      if (imgsrc !== null) pokeArr.push({ src: imgsrc, name: pokeName });
      else i -= 1;
    }
    return pokeArr;
  };

  return (
    <div className="main">
      <Header />
      <Scoreboard score={score} hs={highscore} />
      <Gameboard
        pokemon={pokemon}
        select={setPokeSelected}
        selected={pokeSelected}
        incScore={setScore}
        currScore={score}
        setHS={setHighscore}
        currHS={highscore}
        shuffle={shuffleArray}
        resetCards={loadCards}
      />
    </div>
  );
};

export default Main;
