const pokemonDetailsInner = document.querySelector('.pokemon-details-inner');
const pokemonPictureContainer = document.querySelector('.pokemon-details-picture');
const pokemonDetailsPicture = document.querySelector('.pokemon-details-picture-itself');
const pokemonDetailsName = document.querySelector('.pokemon-detail-name');
const pokemonDetailsWeight = document.querySelector('.pokemon-detail-weight');
let positionX = 0, positionY = 0;

// ROTATING THE IMAGE BASED ON WHERE THE MOUSE CORDANATION IS.

pokemonDetailsInner.addEventListener('mouseenter', e => {

    pokemonDetailsInner.addEventListener('mousemove', mouseMove);

    pokemonDetailsInner.addEventListener('mouseleave', () => {
        pokemonDetailsInner.removeEventListener('mousemove', mouseMove);

        pokemonPictureContainer.style.transition = 'transform 500ms';
        pokemonPictureContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';

        setTimeout(() => {
            pokemonPictureContainer.style.transition = 'none';
        }, 501);
    });
});

function mouseMove(e) {
    positionX = e.clientX;
    positionY = e.clientY;

    console.log(positionX, positionY);

    pokemonPictureContainer.style.transform = `perspective(500px) rotateY(${positionX}deg) rotateX(-${positionY}deg)`;
};

// ACCESSING THE DATA FROM LOCAL STORAGE TO DISPLAY IT IN THE CONTAINERS.

function getDataFromLocalStorage() {
    const pokemonName = localStorage.getItem('pokemonName'), pokemonPicture = localStorage.getItem('pokemonPicture'), pokemonWeight = localStorage.getItem('pokemonWeight');

    if (pokemonName) {
        pokemonDetailsName.textContent = pokemonName.toUpperCase();
        pokemonDetailsWeight.textContent = pokemonWeight + 'kg';
        pokemonDetailsPicture.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`;
    };
};

getDataFromLocalStorage();