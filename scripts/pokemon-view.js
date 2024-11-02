const pokemonDetailsInner = document.querySelector('.pokemon-details-inner');
const pokemonPictureContainer = document.querySelector('.pokemon-details-themselves');
const pokemonDetailsPicture = document.querySelector('.pokemon-details-picture-itself');
const pokemonDetailsName = document.querySelector('.pokemon-detail-name');
const pokemonDetailsWeight = document.querySelector('.pokemon-detail-weight');
const shadow = document.querySelector('.shadow');
let positionX = 0, positionY = 0;

// ROTATING THE IMAGE BASED ON WHERE THE MOUSE CORDANATION IS.

/* pokemonDetailsInner.addEventListener('mouseenter', e => {

    pokemonDetailsInner.addEventListener('mousemove', mouseMove);

    pokemonDetailsInner.addEventListener('mouseleave', () => {
        pokemonDetailsInner.removeEventListener('mousemove', mouseMove);

        pokemonPictureContainer.style.transition = 'transform 500ms';
        pokemonPictureContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';

        setTimeout(() => {
            pokemonPictureContainer.style.transition = 'none';
        }, 501);
    });
}); */

pokemonPictureContainer.addEventListener('mousedown', e => {

    document.addEventListener('mousemove', mouseMove);

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', mouseMove);

        pokemonPictureContainer.style.transition = 'transform 500ms';
        pokemonPictureContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
        shadow.style.transition = 'transform 500ms';
        shadow.style.transform = `perspective(400px) rotateX(60deg) rotateY(0deg)`;

        setTimeout(() => {
            pokemonPictureContainer.style.transition = 'none';
            shadow.style.transition = 'none';
        }, 501);
    });
});

function mouseMove(e) {
    positionX = e.clientX;
    positionY = e.clientY;

    pokemonPictureContainer.style.transform = `perspective(500px) rotateY(${positionX}deg) rotateX(-${positionY}deg)`;
    shadow.style.transform = `perspective(400px) rotateX(60deg) rotateZ(-${positionX}deg)`;
};

// ACCESSING THE DATA FROM LOCAL STORAGE TO DISPLAY IT IN THE CONTAINERS.

function getDataFromLocalStorage() {
    const pokemonName = localStorage.getItem('pokemonName'), pokemonPicture = localStorage.getItem('pokemonImage'), pokemonWeight = localStorage.getItem('pokemonWeight');

    if (pokemonName) {
        pokemonDetailsName.textContent = pokemonName.toUpperCase();
        pokemonDetailsWeight.textContent = pokemonWeight + 'kg';
        pokemonDetailsPicture.src = pokemonPicture;
    };
};

getDataFromLocalStorage();