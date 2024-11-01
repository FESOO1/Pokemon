const outputContainer = document.querySelector('.output');
const searchInput = document.getElementById('searchInput');
const pokemonDetails = document.querySelector('.pokemon-details');
const pokemonDetailsPicture = document.querySelector('.pokemon-details-picture-itself');
const pokemonDetailsCloseBtn = document.querySelector('.pokemon-details-close-button');
let pokemonNumbers = 10;

window.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const responseJson = await response.json();
    

    for (let i = 0; i < 40; i++) {
        const pokemon = responseJson.results[i];

        const pokemonDetailsResponse = await fetch(pokemon.url);
        const pokemonDetails = await pokemonDetailsResponse.json();
        const getImage = pokemonDetails.sprites.other["official-artwork"].front_default;

        const outputItself = document.createElement('div');
        outputItself.classList.add('output-itself');
        outputItself.innerHTML = `
            <a href="#${pokemon.name}" class="output-picture">
                <img src="${getImage}" alt="${pokemon.name}" class="output-picture-itself">
            </a>
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
        outputContainer.children[i].addEventListener('click', e => {
            e.preventDefault();

            /* pokemonDetails.style.display = 'flex'; */
        });
    };
};

pokemonDetailsCloseBtn.addEventListener('click', () => {
    pokemonDetails.style.display = 'none';
});