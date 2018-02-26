import React, { Component } from 'react';

import uuid from 'uuid';

let one = 0;
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPokemon: {},
            // pokemonToEdit: this.props.pokemonToEdit
        }
    };

    handleSubmit(e) {
        e.preventDefault();

        // loop through each input field and ensure it has a valid value
        /*
        if (this.refs.name.value != "") {
            this.setState({ newPokemon: {
                id: this.props.pokemons.length, // uuid.v4(),  //id: this.state.pokemons.length + 1,
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
        */
        /* // this code was to be a promise
        if (this.refs.name.value != "") {
            this.setState({newPokemon: { name: this.refs.name.value }}).then(this.props.addPokemon(this.state.newPokemon));
        } */

        /*
        if (this.props.editablePokemon) { // editablePokemon = isEdit
            console.log("Is update");
        } else {
            // other
            console.log("Other");
        }
        */
        if (this.refs.name.value != "") {
            if (this.props.editable) {
                console.log("Allowed to edit"); // currently getting a warning related to IDs/keys - is likely resovable using UUID module
                /* let updatedPokemon = {
                    name: this.props.pokemonToEdit.name
                    area: this.props.pokemonToEdit.area,
                    type: this.editablePokemon.type,
                    pokeball: this.refs.pokeball,
                    level: this.refs.level,
                    img: this.refs.img,
                    note: this.refs.note
                }
                */ // Froze @ 10:00 (in YT Video)
            } else {
                console.log("Adding");
                this.setState({ newPokemon: {
                    id: this.props.pokemons.length, // uuid.v4(),  //id: this.state.pokemons.length + 1,
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
        }
    };

    /*
    allowType(e) {
        this.props.allowType(e.target.value);
        console.log("Typing...");
    } */

    onChange(e) {
        this.props.changeText(e.target.value);
        console.log("On change");
    }

    render() {
        // console.log("E : " + JSON.stringify(this.props.pokemonToEdit));
        // console.log("Edit: " + this.props.toEdit);
        //console.log(": " + JSON.stringify(this.state.editedPokemon));
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="name" onChange={this.onChange.bind(this)}   value={this.props.pokemonToEdit.name} placeholder="pokemon-name" />
                    <input type="text" ref="area" placeholder="area/s" />
                    <input type="text" ref="type" placeholder="type/s" />
                    <input type="text" ref="pokeball" placeholder="[Minimim] pokeball" />
                    <input type="text" ref="level" placeholder="level/s" /> // may be a number
                    <input type="text" ref="img" placeholder="pokemon-img (URL)" />
                    <input type="text" ref="note" placeholder="Anything else?" />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default Form;

/* Note: May be able to imrpove this component by using a for loop to create the input fields, see: https://stackoverflow.com/questions/36683770/react-how-to-get-the-value-of-an-input-field
* https://stackoverflow.com/questions/36683770/react-how-to-get-the-value-of-an-input-field

"ref" was originally "name" see: https://reactjs.org/docs/refs-and-the-dom.html
*/
