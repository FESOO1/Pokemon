const outputContainer = document.querySelector('.output');
const searchInput = document.getElementById('searchInput');
let pokemonNumbers = 10;

window.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const responseJson = await response.json();
    


    for (let i = 0; i < 20; i++) {
        const pokemon = responseJson.results[i];

        const pokemonDetailsResponse = await fetch(pokemon.url);
        const pokemonDetails = await pokemonDetailsResponse.json();
        const getImage = pokemonDetails.sprites.other["official-artwork"].front_default;

        const outputItself = document.createElement('div');
        outputItself.classList.add('output-itself');
        outputItself.innerHTML = `
            <div class="output-picture">
                <img src="${getImage[i]}" alt="${responseJson.results[i].name}" class="output-picture-itself">
            </div>
            <h4 class="output-name">${responseJson.results[i].name}</h4>
        `;

        outputContainer.appendChild(outputItself);

        console.log(outputContainer.childElementCount);

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
    };
}