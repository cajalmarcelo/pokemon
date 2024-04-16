const axios = require('axios');

//Buscar por id
exports.getPokemonById = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = {
      id: response.data.id,
      name: response.data.name,
      weight: response.data.weight,
      types: response.data.types.map(type => type.type.name),
    };
    return pokemon;
  } catch (error) {
    throw new Error('No se pudo obtener la información del Pokémon.');
  }
};

//Traer todos los pokemons
exports.getAllPokemons = async (offset, limit) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const pokemons = response.data.results.map(pokemon => ({
      id: getPokemonIdFromUrl(pokemon.url),
      name: pokemon.name,
      weight: response.data.weight,
      url: pokemon.url,
    }));
    return pokemons;
  } catch (error) {
    throw new Error('No se pudieron obtener los Pokémon.');
  }
};

//Buscar por nombre
exports.getPokemonByName = async (name) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      return response.data;
    } catch (error) {
      throw new Error('No se pudo obtener la información del Pokémon.');
    }
  };
  

// Función auxiliar para obtener el id de un Pokemon
function getPokemonIdFromUrl(url) {
  const parts = url.split('/');
  return parseInt(parts[parts.length - 2]);
}
