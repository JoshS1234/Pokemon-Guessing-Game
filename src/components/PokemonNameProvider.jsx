import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import PokemonPicture from "./PokemonPicture.jsx";
import GuessBox from "./GuessBox.jsx";
import ScoreCard from "./ScoreCard.jsx";

function PokemonNameProvider() {
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [isLoading, setIsLoading] = useState(false);

  const [startNewTurn, setStartNewTurn] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species?limit=1200")
      .then((data) => {
        const nameList = data.data.results.map((pokemon) => {
          return pokemon.name;
        });
        setPokemonName(nameList[Math.floor(Math.random() * nameList.length)]);
        setIsLoading(false);
      });
  }, [startNewTurn]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section>
        <PokemonPicture pokemonName={pokemonName} />
        <GuessBox
          pokemonName={pokemonName}
          startNewTurn={startNewTurn}
          setStartNewTurn={setStartNewTurn}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
        <ScoreCard currentScore={currentScore} />
      </section>
    );
  }
}

export default PokemonNameProvider;
