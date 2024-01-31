import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchData();
  }, [pokemon.url]);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      {pokemonData && (
        <>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
          <button onClick={handleDetailsClick}>Details</button>
          {showDetails && (
            <div>
              <p>Height: {pokemonData.height}</p>
              <p>Weight: {pokemonData.weight}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PokemonCard;