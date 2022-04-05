import React from "react";
import pokemons from "../data";
import '../style/Pokedex.css'
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render () {
        return(
            <main>
                <section>
                {pokemons.map((pokemon) => <Pokemon info ={pokemon}/>)}
                </section>
            </main>
        )
    }
}

export default Pokedex;