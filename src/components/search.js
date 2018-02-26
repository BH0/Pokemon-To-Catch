import React, { Component } from 'react';

class Search extends Component {

    search(e) {
        let searchbar = document.getElementById("searchbar");
        filterPokemon(searchbar);
    }

    render() {
        return (
            <div>
                <input type="text" id="searchbar" placeholder="Search pokemon" onChange={this.search} />
            </div>
        );
    }
}

export default Search;

function filterPokemon(searchbar) {

    let searchbarValue = searchbar.value.toUpperCase();
    let listOfPokemon = document.getElementById('pokemons');
    let pokemon = listOfPokemon.querySelectorAll('li.pokemon-item');

    for (let i = 0; i < pokemon.length; i++) {
        let name = pokemon[i].getElementsByTagName('h3')[0];
        let area = pokemon[i].getElementsByTagName('h3')[1];
        let type = pokemon[i].getElementsByTagName('h3')[2];
        let level = pokemon[i].getElementsByTagName('h3')[3];
        let pokeball = pokemon[i].getElementsByTagName('h3')[4];
        let note = pokemon[i].getElementsByTagName('h3')[5];

        let elements = [name, area, type, level, pokeball, note];

        elements.forEach(function(element) {
            console.log("Node : " + element.parentElement.parentElement.nodeName);
            if (element.parentElement.parentElement.innerHTML.toUpperCase().indexOf(searchbarValue) > -1) {
                styleIfMatchingOrNot(true, element);
            } else {
                styleIfMatchingOrNot(false, element);
            }

            if (searchbarValue == 0) {
                element.parentElement.parentElement.style.cssText = 'color:black;font-size:100%;';
            }
        });
    }
}

function styleIfMatchingOrNot(bool, element) {
    let target = element.parentElement.parentElement;
	if (bool) { // true = content matches earch-input
		target.style.display = '';
		target.style.cssText = "color:green;font-size:120%;";
	} else {
		target.style.display = 'none';
		target.style.cssText = 'color:red;display:none;';
	}
}
