const pokeapiService = require('../services/pokeapiService');

/**
 * Obtiene un Pokémon por su ID.
 * @param {object} req - Objeto de solicitud.
 * @param {object} res - Objeto de respuesta.
 * @param {function} next - Función de llamada de retorno siguiente.
 */
exports.getPokemonById = async (req, res, next) => {
  try {
    const pokemonId = req.params.id;
    const pokemon = await pokeapiService.getPokemonById(pokemonId);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
};

/**
 * Obtiene todos los Pokémon.
 * @param {object} req - Objeto de solicitud.
 * @param {object} res - Objeto de respuesta.
 * @param {function} next - Función de llamada de retorno siguiente.
 */
exports.getAllPokemons = async (req, res, next) => {
  try {
    const offset = req.query.offset || 0; 
    const limit = req.query.limit || 20;
    const allPokemons = await pokeapiService.getAllPokemons(offset, limit);
    res.json(allPokemons);
  } catch (error) {
    next(error);
  }
};

/**
 * Obtiene un Pokémon por su nombre.
 * @param {object} req - Objeto de solicitud.
 * @param {object} res - Objeto de respuesta.
 * @param {function} next - Función de llamada de retorno siguiente.
 */
exports.getPokemonByName = async (req, res, next) => {
  try {
    const pokemonName = req.params.name;
    const pokemon = await pokeapiService.getPokemonByName(pokemonName);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
};
