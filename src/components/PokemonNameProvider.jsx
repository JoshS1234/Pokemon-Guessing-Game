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

  const [isGen1to2, setIsGen1to2] = useState(false);

  const [isErrorPicture, setIsErrorPicture] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsErrorPicture(false);
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species?limit=1200")
      .then((data) => {
        const nameList = data.data.results.map((pokemon) => {
          return pokemon.name;
        });
        if (!isGen1to2) {
          setPokemonName(nameList[Math.floor(Math.random() * nameList.length)]);
        } else {
          setPokemonName(nameList[Math.floor(Math.random() * 251)]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [startNewTurn, isErrorPicture]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section>
        <div>
          <label htmlFor="toggleGen">Generation 1 and 2 only? </label>
          <button
            id="toggleGen"
            onClick={() => {
              setIsGen1to2(!isGen1to2);
            }}
          >
            {isGen1to2 ? <p>On</p> : <p>Off</p>}
          </button>
          <p>The filter will start from the next pokemon</p>
        </div>
        <div className="imageAndGuess">
          <PokemonPicture
            pokemonName={pokemonName}
            setIsErrorPicture={setIsErrorPicture}
          />
          <GuessBox
            pokemonName={pokemonName}
            startNewTurn={startNewTurn}
            setStartNewTurn={setStartNewTurn}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
          />
        </div>
        <ScoreCard currentScore={currentScore} />
      </section>
    );
  }
}

export default PokemonNameProvider;
