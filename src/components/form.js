import React, { Component } from 'react';

import uuid from 'uuid';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPokemon: {},
        }
    };

    handleSubmit = (e) => { 
        e.preventDefault();
        if (this.props.isEdit) {
            let updatedPokemon = {
                id: this.props.isEdit,
                name: this.refs.name.value,
                area: this.refs.area.value,
                type: this.refs.type.value,
                pokeball: this.refs.pokeball.value,
                level: this.refs.level.value,
                img: this.refs.img.value,
                note: this.refs.note.value
            }
            this.props.onPokemonUpdate(updatedPokemon);
        } else {
            this.setState({ newPokemon: {
                id: this.props.pokemons.length + 1,
                name: this.refs.name.value,
                area: this.refs.area.value,
                type: this.refs.type.value,
                pokeball: this.refs.pokeball.value,
                level: this.refs.level.value,
                img: this.refs.img.value,
                note: this.refs.note.value
            }}, function() {
                this.props.addPokemon(this.state.newPokemon);
                // clear input-field's values
            }); // this code should be a promise
        }
    };

    onChange = (e) =>  {
        this.props.changeText(e.target.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="name" value={this.props.pokemonToEdit.name}
                    placeholder="pokemon-name" onChange={this.onChange} />
                    <input type="text" ref="area" value={this.props.pokemonToEdit.area} placeholder="area/s" onChange={this.onChange} />
                    <input type="text" ref="type" value={this.props.pokemonToEdit.type} placeholder="type/s" onChange={this.onChange} />
                    <input type="text" ref="pokeball" value={this.props.pokemonToEdit.pokeball} placeholder="[Minimim] pokeball" onChange={this.onChange} />
                    <input type="text" ref="level" value={this.props.pokemonToEdit.level} placeholder="level/s" onChange={this.onChange} /> // may be a number
                    <input type="text" ref="img" value={this.props.pokemonToEdit.img} placeholder="pokemon-img (URL)" onChange={this.onChange} />
                    <input type="text" ref="note" value={this.props.pokemonToEdit.note} placeholder="Anything else?" onChange={this.onChange} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default Form;
