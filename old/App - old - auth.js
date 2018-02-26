/// Dependancies
import React, { Component } from 'react';

/// (Custom) Components
import Form from './components/form';
import Search from './components/search';
import Pokemons from './components/pokemons';
import Pokemon from './components/pokemon'; // apprently this is "defined but never used"

/// (Custom) CSS
import './App.css';

/// Database
import fire from './fire';
import Auth from './components/auth';
/*
import * as firebase from 'firebase';
//import firebaseDB from './firebaseDB';
//let db = require('./db');
let config = {
    apiKey: "AIzaSyC-tObejBhqyw-YRluwxYuNSzyjdDu9eMY",
    authDomain: "pokemon-cb3e0.firebaseapp.com",
    databaseURL: "https://pokemon-cb3e0.firebaseio.com",
    projectId: "pokemon-cb3e0",
    storageBucket: "pokemon-cb3e0.appspot.com",
    messagingSenderId: "1000375523776"
};
/*
let firebaseApp = firebase.initializeApp(config);
let firebaseRef = firebaseApp.database().ref("pokemon");
*/
// let firebaseApp = firebase.initializeApp(config);
// let pokemonRef = fire.pokemonRef;

class App extends Component {

    constructor() {
        super();
        this.state = {
            pokemonToEdit: { },
            editablePokemon: 0, // replaced (tempoarily) with isEdit
            isEdit: 0,
            pokemonRef: fire.pokemonRef,
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

    /*
    handlePokemonDelete(pokemon) {
        let pokemons = this.state.pokemons;
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id == pokemon.id) {
                pokemons.splice(i, 1);
                console.log("MAINS");
            }
        }
        // this.firebaseRef.set(pokemons);
        // firebaseRef.set(pokemons);
        this.setState({pokemons: pokemon});
    } */

    componentWillMount() {
        //this.firebaseApp = firebase.initializeApp(config);
        //this.firebaseRef = this.firebaseApp.database().ref("pokemon");
        // let pokemonRef = fire.database().ref('pokemon').orderByKey().limitToLast(100);
        let pokemons = [];
        let _this = this;
        //firebaseRef.once("value", snapshot => {
        // console.log("REF : " + JSON.stringify(this.state.pokemonRef));
        fire.fireAuth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log("User is logged in");
                this.state.pokemonRef.once("value", snapshot => {
                    snapshot.forEach( data => {
                        let pokemon = {
                            id: data.val().id,
                            name: data.val().name,
                            area: data.val().area,
                            type: data.val().type,
                            pokeball: data.val().pokeball,
                            level: data.val().level, // may be a number
                            img: data.val().img,
                            note: data.val().note
                        };
                        pokemons.push(pokemon);
                        _this.setState({
                            pokemons: pokemons
                        });
                    });
                });
            } else {
                alert("User not signed in");
            }
        });
    };

    handleAddPokemon(newPokemon) {
        fire.fireAuth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.state.pokemonRef.push(newPokemon);
            } else {
                alert("Please login");
            }
        });
        this.setState({pokemons: this.state.pokemons.concat(newPokemon)});
    };

    handlePokemonUpdate = pokemon => { // handlePokemonUpdate(pokemon) {
        alert("Updating");
        let pokemons = this.state.pokemons;
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id == pokemon.id) {
                pokemons.splice(i, 1);
            }
        }
        pokemons.push(pokemon);
        // update firebase
        this.setState({ pokemons: pokemons});
        fire.fireAuth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.state.pokemonRef.set(pokemons);
            } else {
                alert("Please login");
            }
        });
    }

    /*
    handlePokemonDelete = (pokemon) => {
        console.log("Deleting;" + pokemon);
        // console.log(this.props.pokemons);
        /*
        let pokemons = this.props.pokemons;
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id == pokemon.id) {
                pokemons.splice(i, 1);
                console.log("Pokemons");
            }
        }
        // firebaseRef.set(pokemons);
        this.setState({pokemons: pokemons});
        // console.log(pokemon); *
    }; */

    handlePokemonEdit = (pokemon) => {
        console.log("Handling: "+JSON.stringify(pokemon)); // note: I may "manipulate" the form input-fields individually (ie 1 for name, area etc)
        this.setState({
            pokemonToEdit: pokemon, isEdit: pokemon.id
        });
    }

    handleChangeText = (text) => {
        this.setState({
            pokemonToEdit: text
        });
    }

    render() {
        // console.log("Editable: " + JSON.stringify(this.state.pokemonToEdit));
        // console.log("AR: " + JSON.stringify(this.state.pokemonToEdit)); // working
        return (
            <div>
                <Auth />
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
