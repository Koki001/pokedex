<<<<<<< HEAD
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

=======
const pokedex = {};
pokedex.init = function(){

   pokedex.fetchPokemon()

}


// create a method to request info from the API

 pokedex.fetchPokemon = function () {
    for (let i = 1; i <= 10; i++) {
        const random = Math.floor(Math.random()* 800)
        // create variables for the API to hold:
        // use URL constructor
        // fetch data and convert to JSON
        const url = `https://pokeapi.co/api/v2/pokemon/${random}`
        fetch(url)
            .then(function (result) {
                return result.json()
            })
            .then(function (newResult) {
                const pokemon = {
                    name: newResult.name,
                    image: newResult.sprites.other.dream_world['front_default'],
                    imageTwo: newResult.sprites['front_default'],
                    type: newResult.types[0].type.name,
                    id: newResult.id,


                }
               
                pokedex.displayPokemon = function() {
                    const ul = document.querySelector('ul')
                    const li = document.createElement('li')
                    const title = document.createElement('h3')
                    const image = document.createElement('img')
                    const pokeId = document.createElement('p')
                    const type = document.createElement('h5')
                    if (pokemon.image == null){
                        image.src = pokemon.imageTwo
                        title.innerHTML = pokemon.name
                    } else{
                        image.src = pokemon.image
                        title.innerHTML = pokemon.name
                    
                    }
                    pokeId.innerHTML = pokemon.id
                    type.innerHTML = pokemon.type
                    ul.appendChild(li)
                    li.appendChild(image)
                    li.appendChild(pokeId)
                    li.appendChild(title)
                    li.appendChild(type)

                }

                pokedex.displayPokemon()
                console.log(newResult)
            })
    }
}





const form = document.querySelector('form')
form.addEventListener('submit', function (refresh){
    refresh.preventDefault()
    const input = document.querySelector('input[name = "poke"]:checked').value
    console.log(input)
    pokedex.fetchPokemon = function () {
        for (let i = 1; i <= input; i++) {
            const random = Math.floor(Math.random() * 800)
            // create variables for the API to hold:
            // use URL constructor
            // fetch data and convert to JSON
            const url = `https://pokeapi.co/api/v2/pokemon/${random}`
            fetch(url)
                .then(function (result) {
                    return result.json()
                })
                .then(function (newResult) {
                    const pokemon = {
                        name: newResult.name,
                        image: newResult.sprites.other.dream_world['front_default'],
                        imageTwo: newResult.sprites['front_default'],
                        type: newResult.types[0].type.name,
                        // typeTwo: newResult.types[1].type.name,
                        id: newResult.id,
                    


                    }
                    

                    pokedex.displayPokemon = function () {
                        const ul = document.querySelector('ul')
                        const li = document.createElement('li')
                        const title = document.createElement('h3')
                        const image = document.createElement('img')
                        const pokeId = document.createElement('p')
                        const type = document.createElement('h5')
                        if (pokemon.image == null) {
                            image.src = pokemon.imageTwo
                            title.innerHTML = pokemon.name
                        } else {
                            image.src = pokemon.image
                            title.innerHTML = pokemon.name

                        }
                        pokeId.innerHTML = pokemon.id
                        type.innerHTML = pokemon.type
                        ul.appendChild(li)
                        li.appendChild(image)
                        li.appendChild(pokeId)
                        li.appendChild(title)
                        li.appendChild(type)

                    }

                    pokedex.displayPokemon()
                    console.log(newResult)
                })
        }
    }
    pokedex.fetchPokemon()



}) 

pokedex.init()


// const pokedex = document.getElementById('pokedex');

// const fetchPokemon = () => {
//     const promises = [];
//     for (let i = 1; i <= 150; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         promises.push(fetch(url).then((res) => res.json()));
//     }
//     Promise.all(promises).then((results) => {
//         const pokemon = results.map((result) => ({
//             name: result.name,
//             image: result.sprites['front_default'],
//             type: result.types.map((type) => type.type.name).join(', '),
//             id: result.id
//         }));
//         displayPokemon(pokemon);
//     });
// };

// const displayPokemon = (pokemon) => {
//     console.log(pokemon);
//     const pokemonHTMLString = pokemon
//         .map(
//             (pokeman) => `
//         <li class="card">
//             <img class="card-image" src="${pokeman.image}"/>
//             <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
//             <p class="card-subtitle">Type: ${pokeman.type}</p>
//         </li>
//     `
//         )
//         .join('');
//     pokedex.innerHTML = pokemonHTMLString;
// };

// fetchPokemon();
>>>>>>> 1998f3792eda53111a58e144fbb4d39ccaa9e5c5
