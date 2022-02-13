const pokedex = {};
pokedex.init = function(){
    pokedex.fetchPokemon()
}
console.log(pokedex)
const pokeGreeting = ["Hey!", "What's up!", "Hello!", "YO!", "Hi!", "Good Day!", "How's it going?", "Greetings!"]
const randomGreeting = pokeGreeting[Math.floor(Math.random() * pokeGreeting.length)]

pokedex.fetchPokemon = function () {
    // for (let i = 1; i <= 10; i++) {
    const random = Math.floor(Math.random() * 850 + 1)
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
                imageThree: newResult.sprites.other["official-artwork"]['front_default'],
                type: newResult.types[0].type.name,
                id: newResult.id,
                height: newResult.height,
                weight: newResult.weight,
                hp: newResult.stats[0].base_stat,
                defense: newResult.stats[2].base_stat,
                attack: newResult.stats[1].base_stat,

            }
            pokedex.displayPokemon = function () {
                const greetTitle = document.querySelector('.greetingTitle');
                const pId = document.querySelector('.pId');
                const pHeight = document.querySelector('.pH');
                const pWeight = document.querySelector('.pW');
                const pType = document.querySelector('.pType');
                const pHp = document.querySelector('.pHp');
                const pAttack = document.querySelector('.pAttack');
                const pDefense = document.querySelector('.pDefense');
                const div = document.querySelector('.singlePokemonContainer')
                const image = document.createElement('img')
                const weightIcon = `<i class="fa-solid fa-weight-hanging"></i>`
                const heightIcon = '<i class="fa-solid fa-up-down"></i>'
                const idIcon = '<i class="fa-solid fa-hashtag"></i>'
                const hpIcon = '<i class="fa-solid fa-heart"></i>'
                const attackIcon = '<i class="fa-solid fa-gavel"></i>'
                const defenseIcon = '<i class="fa-solid fa-shield-blank"></i>'


                if (pokemon.image == null) {
                    image.src = pokemon.imageThree
                } else if (pokemon.imageThree == null) {
                    image.src = pokemon.imageTwo
                } else {
                    image.src = pokemon.image
                }
                pId.innerHTML = `ID: ${idIcon} ${pokemon.id}`
                pHeight.innerHTML = `Height: ${heightIcon} ${pokemon.height / 10}m`
                pWeight.innerHTML = `Weight: ${weightIcon} ${pokemon.weight / 10}kg`
                pType.innerHTML = `Type: ${pokemon.type}`
                pHp.innerHTML = `HP: ${hpIcon} ${pokemon.hp}`
                pAttack.innerHTML = `Attack: ${attackIcon} ${pokemon.attack}`
                pDefense.innerHTML = `Defense: ${defenseIcon} ${pokemon.defense}`
                greetTitle.innerHTML = `${randomGreeting} I'm ${pokemon.name}.`
                div.appendChild(image)
            }

            pokedex.displayPokemon()
            console.log(newResult)
        })
    // }
}

// create a method to request info from the API
const singleButton = document.querySelector('.singlePokemonButton')
singleButton.addEventListener('click', function (refresh) {

refresh.preventDefault()
    function clear() {
        document.querySelector('.singlePokemonContainer').innerHTML = "";
    }
    clear()
    pokedex.fetchPokemon = function () {
    // for (let i = 1; i <= 10; i++) {
        const random = Math.floor(Math.random() * 850 + 1)
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
                    imageThree: newResult.sprites.other["official-artwork"]['front_default'],
                    type: newResult.types[0].type.name,
                    id: newResult.id,
                    height: newResult.height,
                    weight: newResult.weight,
                    hp: newResult.stats[0].base_stat,
                    defense: newResult.stats[2].base_stat,
                    attack: newResult.stats[1].base_stat,

                }
                const randomGreeting = pokeGreeting[Math.floor(Math.random() * pokeGreeting.length)]
                pokedex.displayPokemon = function() {
                    const div = document.querySelector('.singlePokemonContainer')
                    const image = document.createElement('img')
                    const greetTitle = document.querySelector('.greetingTitle');
                    const pId = document.querySelector('.pId');
                    const pHeight = document.querySelector('.pH');
                    const pWeight = document.querySelector('.pW');
                    const pType = document.querySelector('.pType');
                    const pHp = document.querySelector('.pHp');
                    const pAttack = document.querySelector('.pAttack');
                    const pDefense = document.querySelector('.pDefense');
                    image.classList.add("fadeImg")
                    const weightIcon = `<i class="fa-solid fa-weight-hanging"></i>`
                    const heightIcon = '<i class="fa-solid fa-up-down"></i>'
                    const idIcon = '<i class="fa-solid fa-hashtag"></i>'
                    const hpIcon = '<i class="fa-solid fa-heart"></i>'
                    const attackIcon = '<i class="fa-solid fa-gavel"></i>'
                    const defenseIcon = '<i class="fa-solid fa-shield-blank"></i>'

                    if (pokemon.image == null) {
                        image.src = pokemon.imageThree
                    } else if (pokemon.imageThree == null) {
                        image.src = pokemon.imageTwo
                    } else {
                        image.src = pokemon.image
                    }
                    
                    
                    pId.innerHTML = `ID: ${idIcon} ${pokemon.id}`
                    pHeight.innerHTML = `Height: ${heightIcon} ${pokemon.height / 10}m`
                    pWeight.innerHTML = `Weight: ${weightIcon} ${pokemon.weight / 10}kg`
                    pType.innerHTML = `Type: ${pokemon.type}`
                    pHp.innerHTML = `HP: ${hpIcon} ${pokemon.hp}`
                    pAttack.innerHTML = `Attack: ${attackIcon} ${pokemon.attack}`
                    pDefense.innerHTML = `Defense: ${defenseIcon} ${pokemon.defense}`
                    greetTitle.innerHTML = `${randomGreeting} I'm ${pokemon.name}.`

                    div.appendChild(image)

                }

                pokedex.displayPokemon()
                console.log(newResult)
            })

    // }
    }
    pokedex.fetchPokemon()
})

// const checkSubmit = function () {
//     //If the checkbox has been checked
//     if (document.getElementById("manyPoke").checked) {
//         //Set the disabled property to FALSE and enable the button.
//         document.getElementById("manyPoke").disabled = false;
//     } else {
//         document.getElementById("manyPoke").disabled = true;
//     }
// }

const form = document.querySelector('form')
form.addEventListener('submit', function (refresh){
    
    refresh.preventDefault()
    
    function clear() {
        document.querySelector('ul').innerHTML = "";
    }
    clear()

    let inputCheckState = document.querySelector('input[name = "poke"]')
    if (inputCheckState = document.querySelector('input[name = "poke"]:checked')) {
        const input = document.querySelector('input[name = "poke"]:checked').value
        pokedex.fetchPokemon = function () {
            for (let i = 1; i <= input; i++) {
                const random = Math.floor(Math.random() * 850 + 1)
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
                            imageThree: newResult.sprites.other["official-artwork"]['front_default'],
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
                            const anchor = document.createElement('a')
                            anchor.setAttribute("href",`https://www.pokemon.com/us/pokedex/${pokemon.name}`) 
    
    
                            if (pokemon.image == null) {
                                image.src = pokemon.imageThree
                            } else if (pokemon.imageThree == null) {
                                image.src = pokemon.imageTwo
                            } else {
                                image.src = pokemon.image
                            }
    
                            title.innerHTML = pokemon.name
                            pokeId.innerHTML =`#${pokemon.id}`
                            type.innerHTML = pokemon.type
                            ul.appendChild(li)
                            li.appendChild(image)
                            li.appendChild(pokeId)
                            li.appendChild(anchor)
                            anchor.appendChild(title)
                            // li.appendChild(title)
                            li.appendChild(type)
                            
    
                        }
    
                        pokedex.displayPokemon()
                        const scrollPoint = document.querySelector(".browseContainer")
                        scrollPoint.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                        console.log(newResult)
                    })
            }
        }
        pokedex.fetchPokemon()
    } else {
        alert("Please select one of the values above the button before searching! Your options are labelled '4', '8', and '12'.")
    }

}) 

pokedex.init()