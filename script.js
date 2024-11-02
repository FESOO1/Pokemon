const outputContainer = document.querySelector('.output');
const searchInput = document.getElementById('searchInput');
let pokemonNumbers = 40;

window.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const responseJson = await response.json();

    for (let i = 0; i < 40; i++) {
        const pokemon = responseJson.results[i];

        const pokemonDetailsResponse = await fetch(pokemon.url);
        const pokemonDetails = await pokemonDetailsResponse.json();
        const getImage = pokemonDetails.sprites.other["official-artwork"].front_default;

        const outputItself = document.createElement('a');
        outputItself.classList.add('output-itself');
        outputItself.href = './pokemon-view/pokemon-view.html';
        outputItself.innerHTML = `
            <div class="output-picture">
                <img src="${getImage}" alt="${pokemon.name}" class="output-picture-itself">
            </div>
            <h4 class="output-name">${pokemon.name}</h4>
        `;

        outputContainer.appendChild(outputItself);

        // SEARCH ENGINE

        searchInput.addEventListener('input', () => {
            const nameOfThePokemon = responseJson.results[i].name;

            if (nameOfThePokemon.includes(searchInput.value)) {
                outputItself.classList.add('output-itself-shown');
                outputItself.classList.remove('output-itself-hidden');
            } else {
                outputItself.classList.add('output-itself-hidden');
                outputItself.classList.remove('output-itself-shown');
            }
        });


        // POKEMON DETAILS

        const responseTwo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const jsonResponse = await responseTwo.json();
        const pokemonImage = jsonResponse.sprites.other['official-artwork'].front_default;


        outputItself.addEventListener('click', e => {
            /* e.preventDefault(); */

            localStorage.setItem('pokemonName', pokemon.name);
            localStorage.setItem('pokemonWeight', jsonResponse.weight);
            localStorage.setItem('pokemonImage', outputContainer.children[outputItself]);

            console.log(pokemonImage);
        });


    };
};