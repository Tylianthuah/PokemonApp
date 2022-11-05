import React from "react";

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((pokemon) => (
        <p className="pokemonList" style={{ fontFamily: "Verdana", listStyleType: "square" }}>
          {pokemon}
        </p>
      ))}
    </div>
  );
};

export default Pokemon;
