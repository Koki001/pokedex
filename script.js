// create app object for Pokedex
 
// create a method to initialize the app

// create a method to request info from the API
const fetchPokemon = function() {
    for (let i = 1; i <= 40; i++) {
// create variables for the API to hold:
// use URL constructor
// fetch data and convert to JSON
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    fetch(url)
        .then(function(result) {
            return result.json()
        })
        .then(function(newResult) {
            const pokemon = {
                name: newResult.name,
                image: newResult.sprites,
                type: newResult.types
            }
            console.log(pokemon)
        })
    }
}

fetchPokemon()

// create a user input that will display pokemon from API
    // create an event listener 
// use the DOM to create li elements
// use the DOM to create img elements
// use the DOM to create p elements
// populate li elements with images from the API
// get pokemon description from the API and append it to p elements

// ************************************************

