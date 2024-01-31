import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonList from "../../components/Pokemon/PokemonList";

const PokemonsPage = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokemons list:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokemon Page</h1>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
};

export default PokemonsPage;