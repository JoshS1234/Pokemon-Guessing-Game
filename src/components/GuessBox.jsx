import { useState } from "react";

function GuessBox({
  pokemonName,
  startNewTurn,
  setStartNewTurn,
  currentScore,
  setCurrentScore,
}) {
  const [pokemonGuessText, setPokemonGuessText] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasGuessed, setHasGuessed] = useState(false);

  const helperFunction = (event) => {
    event.preventDefault();
    setHasGuessed(true);
    //also include the case where 1st letter capitalised
    if (
      pokemonGuessText === pokemonName ||
      pokemonGuessText.toLowerCase() === pokemonName
    ) {
      setIsCorrect(true);
      setCurrentScore(currentScore + 1);
    } else {
      setIsCorrect(false);
      setCurrentScore(0);
    }
  };

  const startNewTurnFunction = (event) => {
    event.preventDefault();
    setHasGuessed(false);
    console.log(isCorrect, currentScore);

    setIsCorrect(false);
    setStartNewTurn(startNewTurn + 1);
  };

  return (
    <section>
      <form
        onSubmit={(event) => {
          helperFunction(event);
          console.log(pokemonGuessText);
        }}
      >
        <input
          type="text"
          onChange={(event) => {
            setPokemonGuessText(event.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
      <section>
        {!hasGuessed ? (
          <section>
            <h2>Have a guess!</h2>
          </section>
        ) : isCorrect ? (
          <section>
            <h2>
              Woop! Got it correct! It was{" "}
              {pokemonName[0].toUpperCase() + pokemonName.slice(1)}
            </h2>
            <button
              onClick={(event) => {
                startNewTurnFunction(event);
              }}
            >
              Have another go!
            </button>
          </section>
        ) : (
          <section>
            <h2>
              Whoops! Wrongo! It was a{" "}
              {pokemonName[0].toUpperCase() + pokemonName.slice(1)}
            </h2>
            <button
              onClick={(event) => {
                startNewTurnFunction(event);
              }}
            >
              Have another go!
            </button>
          </section>
        )}
      </section>
    </section>
  );
}

export default GuessBox;
