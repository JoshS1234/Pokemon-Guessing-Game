import { useEffect, useState } from "react";
import axios from "axios";

function PokemonPicture({ pokemonName, setIsErrorPicture }) {
  const [pokemonImageURL, setPokemonImageURL] = useState("");
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((data) => {
        setPokemonImageURL(data.data.sprites.front_default);
      })
      .catch((err) => {
        setIsErrorPicture(true);
      });
  }, [pokemonName, setIsErrorPicture]);

  if (pokemonImageURL) {
    return (
      <img
        src={pokemonImageURL}
        alt={`${pokemonName} sprite, default frontal view`}
      />
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default PokemonPicture;
