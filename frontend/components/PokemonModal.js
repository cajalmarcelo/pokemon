import React from 'react';

const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ backgroundColor: 'yellow', border: '3px solid red', borderRadius: '15px' }}>
          <div className="modal-header">
            <h5 className="modal-title">{pokemon.name}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body d-flex align-items-center">
            <div className="col-md-6">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p><strong>Altura:</strong> {pokemon.height}</p>
              <p><strong>Peso:</strong> {pokemon.weight}</p>
              {/* Puedes mostrar más detalles del Pokémon aquí */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
