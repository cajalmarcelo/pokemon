const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/:id', pokemonController.getPokemonById);
router.get('/name/:name', pokemonController.getPokemonByName);
router.get('/', pokemonController.getAllPokemons);

module.exports = router;
