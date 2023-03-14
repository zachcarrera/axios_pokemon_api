import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((response) => setPokemonList(response.data.results));
    };

    return (
        <div className="App">
            <button onClick={() => getPokemon()}>Fetch Pokemon</button>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index} className="list-element">
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
