const pokedex = {};
const pokeGreeting = ["Hey!", "What's up!", "Hello!", "YO!", "Hi!", "Good Day!", "Greetings!"];
const randomGreeting = pokeGreeting[Math.floor(Math.random() * pokeGreeting.length)];

pokedex.init = function(){
    pokedex.fetchPokemon()
}

// ON LOAD -- Function that displays detailed Pokemon image + stats on page load
pokedex.fetchPokemon = function () {
    const random = Math.floor(Math.random() * 898 + 1)
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

                let typeIcon = `<img class="iconAll" src="./assets/iconPack/typePlaceholder.png" alt="">`
                // TYPE ICON IF-ELSE FOR PAGE LOAD
                if (pokemon.type == "rock") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/rock.png" alt="">`
                } else if (pokemon.type == "fire") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/fire.png" alt="">`
                } else if (pokemon.type == "bug") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/bug.png" alt="">`
                } else if (pokemon.type == "dark") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/dark.png" alt="">`
                } else if (pokemon.type == "dragon") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/dragon.png" alt="">`
                } else if (pokemon.type == "fairy") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/fairy.png" alt="">`
                } else if (pokemon.type == "fighting") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/fighting.png" alt="">`
                } else if (pokemon.type == "flying") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/flying.png" alt="">`
                } else if (pokemon.type == "ghost") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/ghost.png" alt="">`
                } else if (pokemon.type == "grass") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/grass.png" alt="">`
                } else if (pokemon.type == "ground") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/ground.png" alt="">`
                } else if (pokemon.type == "ice") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/ice.png" alt="">`
                } else if (pokemon.type == "electric") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/lightning.png" alt="">`
                } else if (pokemon.type == "poison") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/poison.png" alt="">`
                } else if (pokemon.type == "psychic") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/psychic.png" alt="">`
                } else if (pokemon.type == "steel") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/steel.png" alt="">`
                } else if (pokemon.type == "water") {
                    typeIcon = `<img class="iconAll" src="./assets/iconPack/water.png" alt="">`
                }

                const weightIcon = `<img class="iconAll" src="./assets/iconPack/weight.png" alt="">`
                const heightIcon = `<img class="iconAll" src="./assets/iconPack/height.png" alt="">`
                const idIcon = `<img class="iconAll" src="./assets/iconPack/id.png" alt="">`
                const hpIcon = `<img class="iconAll" src="./assets/iconPack/hp.png" alt="">`
                const attackIcon = `<img class="iconAll" src="./assets/iconPack/attack.png" alt="">`
                const defenseIcon = `<img class="iconAll" src="./assets/iconPack/defense.png" alt="">`
                

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
                pType.innerHTML = `Type: ${typeIcon} ${pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}`
                pHp.innerHTML = `HP: ${hpIcon} ${pokemon.hp}`
                pAttack.innerHTML = `Attack: ${attackIcon} ${pokemon.attack}`
                pDefense.innerHTML = `Defense: ${defenseIcon} ${pokemon.defense}`
                greetTitle.innerHTML = `${randomGreeting} I'm ${pokemon.name}.`
                div.appendChild(image)
            }
            pokedex.displayPokemon()
            console.log(newResult)
        })
}

// INDIVIDUAL -- ON-CLICK section that displays detailed Pokemon image + stats
const singleButton = document.querySelector('.singlePokemonButton')
singleButton.addEventListener('click', function (refresh) {
refresh.preventDefault()
    // clear() empties the contents of the div so that they can be re-populated on button click
    function clear() {
        document.querySelector('.singlePokemonContainer').innerHTML = "";
    }
    clear()
    // disableTimer() disables the button for a duration to avoid rapid clicks/calls to the API
    function disableTimer() {
       singleButton.disabled = true;
        setTimeout(function () {singleButton.disabled = false; }, 1000);
    } disableTimer()
    
    pokedex.fetchPokemon = function () {
        const random = Math.floor(Math.random() * 898 + 1)
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
                const randomGreeting = pokeGreeting[Math.floor(Math.random() * pokeGreeting.length)];
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

                    const weightIcon = `<img class="iconAll" src="./assets/iconPack/weight.png" alt="">`
                    const heightIcon = `<img class="iconAll" src="./assets/iconPack/height.png" alt="">`
                    const idIcon = `<img class="iconAll" src="./assets/iconPack/id.png" alt="">`
                    const hpIcon = `<img class="iconAll" src="./assets/iconPack/hp.png" alt="">`
                    const attackIcon = `<img class="iconAll" src="./assets/iconPack/attack.png" alt="">`
                    const defenseIcon = `<img class="iconAll" src="./assets/iconPack/defense.png" alt="">`
                    let typeIcon = `<img class="iconAll" src="./assets/iconPack/typePlaceholder.png" alt="">`

                    if (pokemon.image == null) {
                        image.src = pokemon.imageThree
                    } else if (pokemon.imageThree == null) {
                        image.src = pokemon.imageTwo
                    } else {
                        image.src = pokemon.image
                    }
                    // TYPE ICON IF-ELSE FOR BUTTON
                    if (pokemon.type == "rock") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/rock.png" alt="">`
                    } else if (pokemon.type == "fire") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/fire.png" alt="">`
                    } else if (pokemon.type == "bug") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/bug.png" alt="">`
                    } else if (pokemon.type == "dark") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/dark.png" alt="">`
                    } else if (pokemon.type == "dragon") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/dragon.png" alt="">`
                    } else if (pokemon.type == "fairy") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/fairy.png" alt="">`
                    } else if (pokemon.type == "fighting") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/fighting.png" alt="">`
                    } else if (pokemon.type == "flying") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/flying.png" alt="">`
                    } else if (pokemon.type == "ghost") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/ghost.png" alt="">`
                    } else if (pokemon.type == "grass") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/grass.png" alt="">`
                    } else if (pokemon.type == "ground") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/ground.png" alt="">`
                    } else if (pokemon.type == "ice") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/ice.png" alt="">`
                    } else if (pokemon.type == "electric") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/lightning.png" alt="">`
                    } else if (pokemon.type == "poison") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/poison.png" alt="">`
                    } else if (pokemon.type == "psychic") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/psychic.png" alt="">`
                    } else if (pokemon.type == "steel") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/steel.png" alt="">`
                    } else if (pokemon.type == "water") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/water.png" alt="">`
                    }

                    pId.innerHTML = `ID: ${idIcon} ${pokemon.id}`
                    pHeight.innerHTML = `Height: ${heightIcon} ${pokemon.height / 10}m`
                    pWeight.innerHTML = `Weight: ${weightIcon} ${pokemon.weight / 10}kg`
                    pType.innerHTML = `Type: ${typeIcon} ${pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}`
                    pHp.innerHTML = `HP: ${hpIcon} ${pokemon.hp}`
                    pAttack.innerHTML = `Attack: ${attackIcon} ${pokemon.attack}`
                    pDefense.innerHTML = `Defense: ${defenseIcon} ${pokemon.defense}`
                    greetTitle.innerHTML = `${randomGreeting} I'm ${pokemon.name}.`

                    div.appendChild(image)
                }
                pokedex.displayPokemon()
                console.log(newResult)
            })
    }
    pokedex.fetchPokemon()
})

// SEARCH -- ON-CLICK section SEARCH TEST
const searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', function (refresh) {
    refresh.preventDefault()
    function disableTimer() {
        singleButton.disabled = true;
        setTimeout(function () { singleButton.disabled = false; }, 1000);
    } disableTimer()

    const searchInput = document.querySelector("input[name=searchInput]").value.toLowerCase()
    
    function disableTimer() {
        searchButton.disabled = true;
        setTimeout(function () { searchButton.disabled = false; }, 1000);
    } disableTimer()

    pokedex.fetchPokemon = function () {
        const url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`
        fetch(url)
            .then(function (result) {
                if (result.ok) {
                    return result.json()
                } else {
                    throw new Error(result.statusText);
                }
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

                function clear() {
                    document.querySelector('.singlePokemonContainer').innerHTML = "";
                }
                clear()

                const randomGreeting = pokeGreeting[Math.floor(Math.random() * pokeGreeting.length)];
                pokedex.displayPokemon = function () {
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

                    const weightIcon = `<img class="iconAll" src="./assets/iconPack/weight.png" alt="">`
                    const heightIcon = `<img class="iconAll" src="./assets/iconPack/height.png" alt="">`
                    const idIcon = `<img class="iconAll" src="./assets/iconPack/id.png" alt="">`
                    const hpIcon = `<img class="iconAll" src="./assets/iconPack/hp.png" alt="">`
                    const attackIcon = `<img class="iconAll" src="./assets/iconPack/attack.png" alt="">`
                    const defenseIcon = `<img class="iconAll" src="./assets/iconPack/defense.png" alt="">`
                    let typeIcon = `<img class="iconAll" src="./assets/iconPack/typePlaceholder.png" alt="">`

                    if (pokemon.image == null) {
                        image.src = pokemon.imageThree
                    } else if (pokemon.imageThree == null) {
                        image.src = pokemon.imageTwo
                    } else {
                        image.src = pokemon.image
                    }
                    // TYPE ICON IF-ELSE FOR BUTTON
                    if (pokemon.type == "rock") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/rock.png" alt="">`
                    } else if (pokemon.type == "fire") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/fire.png" alt="">`
                    } else if (pokemon.type == "bug") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/bug.png" alt="">`
                    } else if (pokemon.type == "dark") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/dark.png" alt="">`
                    } else if (pokemon.type == "dragon") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/dragon.png" alt="">`
                    } else if (pokemon.type == "fairy") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/fairy.png" alt="">`
                    } else if (pokemon.type == "fighting") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/fighting.png" alt="">`
                    } else if (pokemon.type == "flying") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/flying.png" alt="">`
                    } else if (pokemon.type == "ghost") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/ghost.png" alt="">`
                    } else if (pokemon.type == "grass") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/grass.png" alt="">`
                    } else if (pokemon.type == "ground") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/ground.png" alt="">`
                    } else if (pokemon.type == "ice") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/ice.png" alt="">`
                    } else if (pokemon.type == "electric") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/lightning.png" alt="">`
                    } else if (pokemon.type == "poison") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/poison.png" alt="">`
                    } else if (pokemon.type == "psychic") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/psychic.png" alt="">`
                    } else if (pokemon.type == "steel") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/steel.png" alt="">`
                    } else if (pokemon.type == "water") {
                        typeIcon = `<img class="iconAll" src="./assets/iconPack/water.png" alt="">`
                    }

                    pId.innerHTML = `ID: ${idIcon} ${pokemon.id}`
                    pHeight.innerHTML = `Height: ${heightIcon} ${pokemon.height / 10}m`
                    pWeight.innerHTML = `Weight: ${weightIcon} ${pokemon.weight / 10}kg`
                    pType.innerHTML = `Type: ${typeIcon} ${pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}`
                    pHp.innerHTML = `HP: ${hpIcon} ${pokemon.hp}`
                    pAttack.innerHTML = `Attack: ${attackIcon} ${pokemon.attack}`
                    pDefense.innerHTML = `Defense: ${defenseIcon} ${pokemon.defense}`
                    greetTitle.innerHTML = `${randomGreeting} I'm ${pokemon.name}.`

                    div.appendChild(image)
                }
                pokedex.displayPokemon()

            }).catch(function (error) {
                alert("Oops! That was not a Pokemon name!")
                console.log(error)
            }) 
            document.querySelector("input[name=searchInput]").value = ""
            const scrollPoint = document.querySelector(".meetImgContainer")
            scrollPoint.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
    }
    pokedex.fetchPokemon()
})

// GALLERY -- ON-CLICK section that displays Pokemon gallery
const form = document.querySelector('.pokeForm')
form.addEventListener('submit', function (refresh){
    refresh.preventDefault()
    
    function clear() {
        document.querySelector('ul').innerHTML = "";
    }
    clear()
    // if (inputCheckState) makes sure a radio button input is selected before function runs // alert() instead
    let inputCheckState = document.querySelector('input[name = "poke"]')
    if (inputCheckState = document.querySelector('input[name = "poke"]:checked')) {
        const input = document.querySelector('input[name = "poke"]:checked').value
        
        function disableTimer() {
            document.getElementById("manyPoke").disabled = true;
            setTimeout(function () { document.getElementById("manyPoke").disabled = false; }, 1500);
        } disableTimer()

        pokedex.fetchPokemon = function () {
            for (let i = 1; i <= input; i++) {
                const random = Math.floor(Math.random() * 898 + 1)
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
    
                            let typeIcon = `<img class="iconAll" src="./assets/iconPack/typePlaceholder.png" alt="">`

                            if (pokemon.image == null) {
                                image.src = pokemon.imageThree
                            } else if (pokemon.imageThree == null) {
                                image.src = pokemon.imageTwo
                            } else {
                                image.src = pokemon.image
                            }

                            if (pokemon.type == "rock") {
                                type.classList.add("rockColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/rock.png" alt="">`
                            } else if (pokemon.type == "fire") {
                                type.classList.add("fireColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/fire.png" alt="">`
                            } else if (pokemon.type == "bug") {
                                type.classList.add("bugColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/bug.png" alt="">`
                            } else if (pokemon.type == "dark") {
                                type.classList.add("darkColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/dark.png" alt="">`
                            } else if (pokemon.type == "dragon") {
                                type.classList.add("dragonColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/dragon.png" alt="">`
                            } else if (pokemon.type == "fairy") {
                                type.classList.add("fairyColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/fairy.png" alt="">`
                            } else if (pokemon.type == "fighting") {
                                type.classList.add("fightingColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/fighting.png" alt="">`
                            } else if (pokemon.type == "flying") {
                                type.classList.add("flyingColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/flying.png" alt="">`
                            } else if (pokemon.type == "ghost") {
                                type.classList.add("ghostColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/ghost.png" alt="">`
                            } else if (pokemon.type == "grass") {
                                type.classList.add("grassColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/grass.png" alt="">`
                            } else if (pokemon.type == "ground") {
                                type.classList.add("groundColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/ground.png" alt="">`
                            } else if (pokemon.type == "ice") {
                                type.classList.add("iceColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/ice.png" alt="">`
                            } else if (pokemon.type == "electric") {
                                type.classList.add("lightningColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/lightning.png" alt="">`
                            } else if (pokemon.type == "poison") {
                                type.classList.add("poisonColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/poison.png" alt="">`
                            } else if (pokemon.type == "psychic") {
                                type.classList.add("psychicColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/psychic.png" alt="">`
                            } else if (pokemon.type == "steel") {
                                type.classList.add("steelColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/steel.png" alt="">`
                            } else if (pokemon.type == "water") {
                                type.classList.add("waterColor")
                                typeIcon = `<img class="iconAll" src="./assets/iconPack/water.png" alt="">`
                            } else if (pokemon.type == "normal"){
                                type.classList.add("normalColor")
                            }

                            // some hyphenated names were not linking to Pokemon's official site. This only enters the string before the hyphen as a title 
                            // title.innerHTML = pokemon.name.split("-")[0]
                            title.innerHTML = pokemon.name
                            pokeId.innerHTML =`#${pokemon.id}`
                            type.innerHTML = `${typeIcon} ${pokemon.type}`
                            console.log(title.innerHTML)
                            ul.appendChild(li)
                            li.appendChild(image)
                            li.appendChild(pokeId)
                            li.appendChild(anchor)
                            anchor.appendChild(title)
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