/// Dependancies
import React, { Component } from 'react';
import * as firebase from 'firebase';


/// (Custom) Components
import Form from './components/form';
import Search from './components/search';
import Pokemon from './components/pokemon';

let config = {
    apiKey: "AIzaSyC-tObejBhqyw-YRluwxYuNSzyjdDu9eMY",
    authDomain: "pokemon-cb3e0.firebaseapp.com",
    databaseURL: "https://pokemon-cb3e0.firebaseio.com",
    projectId: "pokemon-cb3e0",
    storageBucket: "pokemon-cb3e0.appspot.com",
    messagingSenderId: "1000375523776"
};

let firebaseApp = firebase.initializeApp(config);
let firebaseRef = firebaseApp.database().ref("pokemon");

class App extends Component {

    constructor() {
        super();
        this.state = {
            pokemons: [
                {
                    id: 1,
                    name: "example",
                    area: "example",
                    type: "example",
                    pokeball: "example",
                    levels: "example",
                    note: "example"
                }
            ]
        };
    }

    componentWillMount() {

        let pokemons = [];
        let _this = this;
        firebaseRef.once("value", snapshot => {
            snapshot.forEach( data => {
                let pokemon = {
                    id: data.val().id,
                    name: data.val().name,
                    //area: data.val().area,
                    //type: data.val().type,
                    //pokeball: data.val().pokeball,
                    //levels: data.val().levels, // may be a number
                    //img: data.val().img,
                    //note: data.val().note
                };
                pokemons.push(pokemon);
                _this.setState({
                    pokemons: pokemons
                }, function() {
                //    console.log(`data: ${JSON.stringify(data)}`);
                });
            });
        });
    };

    handleAddPokemon(newPokemon) {
        this.setState({pokemons: this.state.pokemons.concat(newPokemon)});
        firebaseRef.push(newPokemon);
    };

    render() {

        let pokemonItems; // note: when/if this becomes a child component we will need to change "state" to "props" (as we will be passing the data as properties )
        //console.log(`State: ${this.state}`);

        // if (this.state.pokemons) {
        pokemonItems = this.state.pokemons.map(pokemon => {
            return (
            <li>
                hi
            </li>
            );
        });
        //    } else {
        //            return (<div><p>Red: No pokemon to catch </p></div>);
        //        }
        return (
            <div>
                <Form {...this.state} addPokemon={this.handleAddPokemon.bind(this)} />
                <Search />
                {PokemonItems}
            </div>
        );
    }
}
// (was underneath <seatch> )
// <Pokemon pokemon={this.state.pokemons[0]}  key={this.state.pokemons[0].id}/>
export default App;
