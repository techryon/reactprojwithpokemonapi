import React, { useState } from "react";
import PokemonList from "./PokemonList";

function App() {
  const [pokemon, setPokemon] = useState(["balbasaur", "charmander"]);
  return <PokemonList pokemon={pokemon} />;
}

export default App;
