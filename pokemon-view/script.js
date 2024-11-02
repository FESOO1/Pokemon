const pokemonDetails = document.querySelector('.pokemon-details');
const pokemonDetailsPicture = document.querySelector('.pokemon-details-picture-itself');
const pokemonDetailsName = document.querySelector('.pokemon-detail-name');
const pokemonDetailsWeight = document.querySelector('.pokemon-detail-weight');

function getDataFromLocalStorage() {
    const pokemonName = localStorage.getItem('pokemonName'), pokemonPicture = localStorage.getItem('pokemonPicture'), pokemonWeight = localStorage.getItem('pokemonWeight');

    if (pokemonName) {
        pokemonDetailsName.textContent = pokemonName.toUpperCase();
        pokemonDetailsWeight.textContent = pokemonWeight + 'kg';
        pokemonDetailsPicture.src = pokemonPicture;
    };
};

getDataFromLocalStorage();