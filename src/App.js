/// Dependancies
import React, { Component } from 'react';

/// (Custom) Components
import Form from './components/form';
import Search from './components/search';
import Pokemons from './components/pokemons';

/// (Custom) CSS
import './App.css';

/// Database
//import fire from './fire';
//import Auth from './components/auth';

class App extends Component {

    constructor() {
        super();
        this.state = {
            pokemonToEdit: { },
            editablePokemon: 0,
            /* pokemonRef: fire.pokemonRef ,*/
            pokemons: [
                {
                    id: 1,
                    name: "example",
                    area: "example",
                    type: "example",
                    pokeball: "example",
                    level: "example",
                    img: "x.png",
                    note: "example"
                }
            ]
        };
    }

    componentWillMount() {
        let pokemons = [];
        let _this = this;
        // fire.fireAuth.onAuthStateChanged(firebaseUser => {
            // if (firebaseUser) {
            /*
                this.state.pokemonRef.once("value", snapshot => {
                    snapshot.forEach( data => {
                        let pokemon = {
                            id: data.val().id,
                            name: data.val().name,
                            area: data.val().area,
                            type: data.val().type,
                            pokeball: data.val().pokeball,
                            level: data.val().level,
                            img: data.val().img,
                            note: data.val().note
                        };
                        pokemons.push(pokemon);
                        _this.setState({
                            pokemons: pokemons
                        });
                    });
                }); */
            // } else {
            //    alert("User not signed in");
            // }
        // });
    };

    handleAddPokemon(newPokemon) {
        // fire.fireAuth.onAuthStateChanged(firebaseUser => {
            // if (firebaseUser) {
                // this.state.pokemonRef.push(newPokemon);
            // } else {
                // alert("Please login");
            // }
        // });
        this.setState({pokemons: this.state.pokemons.concat(newPokemon)});
    };

    handlePokemonUpdate = pokemon => {
        let pokemons = this.state.pokemons;
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id == pokemon.id) {
                pokemons.splice(i, 1);
            }
        }
        pokemons.push(pokemon);
        this.setState({ pokemons: pokemons});
        // fire.fireAuth.onAuthStateChanged(firebaseUser => {
            // if (firebaseUser) {
                // this.state.pokemonRef.set(pokemons);
            // } else {
            //    alert("Please login");
            // }
        // });
    }

    handlePokemonEdit = (pokemon) => {
        this.setState({
            pokemonToEdit: pokemon, editablePokemon: pokemon.id
        });
    }

    handleChangeText = (text) => {
        this.setState({
            pokemonToEdit: text
        });
    }

    render() {
        return (
            <div>
                <h1>Find A Pokemon: </h1>
                <Search />
                <h1>Add A Pokemon: </h1>
                <Form
                {...this.state}
                pokemonToEdit={this.state.pokemonToEdit}
                changeText={this.handleChangeText}
                onPokemonUpdate={this.handlePokemonUpdate}
                addPokemon={this.handleAddPokemon.bind(this)}
                />
                <h1>Pokemon you want to catch: </h1>
                <Pokemons pokemons={this.state.pokemons}
                editPokemon={this.handlePokemonEdit} />
            </div>
        );
    }
}

export default App;
