import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon`
      );
      const data = await response.json();
      setPokemonList(data.results);
    };

    fetchPokemonList();
  }, []);

  return (
    <div>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
 
    </div>
  );
};

export default PokemonList;
