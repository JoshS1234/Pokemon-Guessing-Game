import { useEffect, useState } from "react";
import axios from "axios";

function PokemonPicture({ pokemonName }) {
  const [pokemonImageURL, setPokemonImageURL] = useState("");
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((data) => {
        setPokemonImageURL(data.data.sprites.front_default);
      });
  }, [pokemonName]);

  if (pokemonImageURL) {
    return <img src={pokemonImageURL} alt={`image of a ${pokemonName}`} />;
  } else {
    return <h1>Loading...</h1>;
  }
}

export default PokemonPicture;
