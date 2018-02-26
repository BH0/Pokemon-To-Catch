
React Clientside + Firebase Application:
* Description:
	* With so many Pokemon existing these days its difficult to keep track of
		what ones you wish to catch, so here is a web-application to make your
		Pokemon journey a tiny bit easier - or at least not as frustrating to
		those with a bad long term memory
	* Developer notes:
		* The application will (for now) be aimed towards one of the Nintendo games (Pokemon Emerald etc)
		* The actual best way to use the application may be to
			* Enter into Pokemon battles, when you see a Pokemon you want, input the pokemon and it's details into the "catch list"
		* There may be a "Pokemon related information" page which will contain all the different
			types Pokemon can have/be and information about these types , the areas/regions, Pokeballs
			and information about such Pokeballs
		* I am intentionally leaving out the following features (to avoid feature creep + keep project scope/d):
			* View recently caught Pokemon
			* Recieive notifications
	* Specifications / Requirements:
		* Input Pokemon that you wish to catch
			* Pokemon name
			* Area/s / region to find Pokemon - may be a dropdown-select
			* Pokemon Type/s - may be a dropdown-select
			* Minimim Pokeball, Pokeballs required - may be a dropdown-select
			* Average Level/s - optional
			* Image of Pokemon - maybe
			* Note (paragraph) - optional
		* Search for Pokemon by
			* Name (alphebetical)
			* Type
			* Area/s to find Pokemon
			* Average level/s
		* When a Pokemon has been "caught" the user can delete it from the list


To Do:
* Build application using same version of React, Bower & Firebase CDN/s using the script tag for each component
* Make Gulpfile and have it concatenate all of the components into one JS file which can then be linked via script tag - brought forward (todo / in progress)
* Update CDN versions of React to use the latest (stable) version
* Redo application using Create-React-App

Components:
* Form - 7 fields
	* When submitted adds a Pokemon (list-item) to the list & the database
* "Pokemon to catch" (item) - Allows for a "caught" button which when clicked removes the Pokemon (item) from the application & the database, also contains data which was retrieved via the form
*  Searchbar - filters out the Pokemon (items) which do not match the search criteria


To do - current:
* Set up project using Create-React-App - done
* Render main component and its child/nested components - done
* Connect to Firebase database - done
	* see:  https://stackoverflow.com/questions/38877539/reading-data-from-firebase-3-into-a-react-component-with-es6-syntax
* Form
	* Build input form - done
	* Ensure data inputted into form is stored in database accordingly -
		* produce "onChange" function - cancelled
		* produce "onSubmit" function - done
		* create onPokemonAdd property function - done  
		* create pokemonAdd handler (handlePokemonAdd) - done
		* ensure state is updated - done
		* store Pokemon [item] to database - done  
 		* test + check database - done
* "View Pokemon" (aliases: Pokemon, Pokemons, Pokemon-item/s) - done  
 	* Ensure Pokemon are retrieved from database - done
	* Ensure Pokemon are listed (displayed) appropriately - done
	* Ensure a Pokemon-item can be - done
	 	* deleted from the database and thus will not be displayed - todo  
		* edited and thus the database's [item] will be updated - todo
		* map data in the appropriately place - done
* Search
	* Build input field (may be a form) which is able to change state
	* Ensure Pokemon are filtered (and displayed) appropriately
* Unspecified:
	* Set initial state
	*
