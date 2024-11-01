const outputContainer = document.querySelector('.output');
let pokemonNumbers = 10;

window.addEventListener('click', fetchData);

async function fetchData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const responseJson = await response.json();


    for (let i = 0; i < 10; i++) {
        const outputItself = document.createElement('div');
        outputItself.classList.add('output-itself');
        outputItself.innerHTML = `
            <div class="output-picture">
                <img src="https://yt3.googleusercontent.com/YupxObilqFY2U391y_35eLnYnlDwMS_zUH_HMbCBA2nS9PciMUgP9Aju3eJhG3v81FEKYUtIyV4=s900-c-k-c0x00ffffff-no-rj" alt="a pokemon" class="output-picture-itself">
            </div>
            <h4 class="output-name">${responseJson.results[i].name}</h4>
        `;

        outputContainer.appendChild(outputItself);
    };
}