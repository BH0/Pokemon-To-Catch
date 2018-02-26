import React, { Component } from 'react';

class Pokemon extends Component {
    constructor(props) {
        super(props);
    }

    onDelete(pokemon) {
        this.props.deletePokemon(pokemon);
     }

     editPokemon(pokemon) {
         this.props.editPokemon(pokemon);
     }

    render() {
        return(
            <li className="pokemon-item">
                <p className="pokemon-name"><i>Name: </i><h3>{this.props.pokemon.name}</h3></p>
                <p className="pokemon-area"><i>Area: </i><h3>{this.props.pokemon.area}</h3></p>
                <p className="pokemon-type"><i>Type: </i><h3>{this.props.pokemon.type}</h3></p>
                <p className="pokemon-level"><i>Level: </i><h3>{this.props.pokemon.level}</h3></p>
                <p className="pokemon-pokeball"><i>Pokeball: </i><h3>{this.props.pokemon.pokeball}</h3></p>
                <p className="pokemon-note"><i>Note: </i><h3>{this.props.pokemon.note}</h3></p>
                <span onClick={this.editPokemon.bind(this, this.props.pokemon)}>Edit</span>
                <button onClick={this.onDelete.bind(this, this.props.pokemon)}>Caught</button>
            </li>
        );
    }
}

export default Pokemon;
