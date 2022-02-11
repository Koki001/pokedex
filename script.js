// create a method to request info from the API
const fetchPokemon = function () {
    for (let i = 1; i <= 40; i++) {
        // create variables for the API to hold:
        // use URL constructor
        // fetch data and convert to JSON
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        fetch(url)
            .then(function (result) {
                return result.json()
            })
            .then(function (newResult) {
                const pokemon = {
                    name: newResult.name,
                    image: newResult.sprites,
                    type: newResult.types
                }
                // console.log(pokemon)
            })
    }
}

fetchPokemon()


const form = document.querySelector('form')
form.addEventListener('submit', function (refresh){
    refresh.preventDefault()
    const input = document.querySelector('input[name = "poke"]:checked').value
    console.log(input)

    
}) 