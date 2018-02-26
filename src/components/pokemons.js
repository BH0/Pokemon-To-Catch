import React, { Component } from 'react';

import Pokemon from '../components/pokemon';

/// Database
// import fire from '../fire';


class Pokemons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // pokemonRef: fire.pokemonRef
        };
    }


    handlePokemonDelete = (pokemon) => {
        let pokemons = this.props.pokemons;
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id == pokemon.id) {
                pokemons.splice(i, 1);
            }
        }

        // this.state.pokemonRef.set(pokemons);
        this.setState({pokemons: pokemons});
    }

    editPokemon(pokemon) { // Passes pokemon object to parent (main) component
        this.props.editPokemon(pokemon);
    }

    render() {

        let pokemonItems;
        if (this.props.pokemons) {
            pokemonItems = this.props.pokemons.reverse().map(pokemon => {
                return (
                    <Pokemon key={pokemon.id} pokemon={pokemon}  deletePokemon={this.handlePokemonDelete}
                    editPokemon={this.editPokemon.bind(this)}
                    />
                );
            });
        } else {
            return (
                <div>
                    <p className="warning">No pokemon to catch </p>
                </div>
            );
        }
        return (
            <ul id="pokemons">
                {pokemonItems}
            </ul>
        );
    }
}

export default Pokemons;
