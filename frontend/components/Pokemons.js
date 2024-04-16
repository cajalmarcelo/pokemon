import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonModal from './PokemonModal';

const Pokemons = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [listaPokemon, setListaPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const apiUrl = 'http://localhost:4000/api/pokemon';

  // Función para cargar la lista 
  const fetchPokemons = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      setListaPokemon(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Cargar la lista
  useEffect(() => {
    fetchPokemons();
  }, []);

  //mostrar la info al hacer click en el pokemon
  const handlePokemonClick = async (pokemonUrl) => {
    try {
      const response = await fetch(pokemonUrl);
      if (!response.ok) {
        throw new Error('Error al obtener los datos del Pokémon');
      }
      const pokemonData = await response.json();
      setSelectedPokemon(pokemonData);
    } catch (error) {
      console.error('Error al obtener los datos del Pokémon:', error);
    }
  };

  //cierre del modal
  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  // Buscar un Pokémon
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/name/${searchQuery}`);
      if (!response.ok) {
        throw new Error('No se encontró ningún Pokémon con ese nombre.');
      }
      const pokemonData = await response.json();
      setSelectedPokemon(pokemonData);
    } catch (error) {
      console.error('Error al buscar el Pokémon:', error);
    }
  };

  //estados de carga
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al obtener la información de Pokémon: {error}</div>;

  // Mostrar lista de pokemon
  return (
    <div className="container">
      <h1 className="mt-4 mb-3 text-center">Lista de Pokémon</h1>
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar Pokémon por nombre"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="submit">Buscar</button>
          </div>
        </div>
      </form>
      <div className="row">
        {listaPokemon.map((pokemon, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card" style={{ cursor: 'pointer' }} onClick={() => handlePokemonClick(pokemon.url)}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="card-img-top" alt={pokemon.name} />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PokemonModal pokemon={selectedPokemon} onClose={handleCloseModal} />
    </div>
  );
};

export default Pokemons;
