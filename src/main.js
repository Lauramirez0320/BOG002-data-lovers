import {  dataApi } from './data.js';
import { dataApi2 } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const imagenCharacter = document.querySelector('.card-container');
const form = document.querySelector('.search');
const inputSearch = document.querySelector('#search');
const seeMoreButton = document.querySelector('#seeMore-button');

const checkAZRadio = document.querySelector('#sortByLetterAZ');
const checkZARadio = document.querySelector('#sortByLetterZA');
const checkRadio = document.getElementsByName('sortByLetter')

const apiUrlAllCharacters = 'https://rickandmortyapi.com/api/character';
let apiUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4,5';
const apiUrlEpisode = 'https://rickandmortyapi.com/api/episode'


//Search input
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(getData());
  
  searching(getData());
})

function getData() {
  let finish = inputSearch.value.trim();
  return finish;
}

function searching(textInput) {
  location.replace(`https://www.google.com/search?q=${textInput}`);
}

//Sort by letter asc desc
// checkAZRadio.addEventListener('click', function () {
//   console.log('Click');
//   const type = 1; 
//   sortByLetter(type);
  
// })

// function sortByLetter(type) {
//   let start = 0;
//   let end = 50;
//   const NewArray = sortData(dataSearch, type);
//   let dataSearch = NewArray;
//   dataApi2();
// }

//Render characters
export function renderCharacters(data) {
    // let imagen = document.createElement("img");
    // let charachterName = document.createElement("")
    // imagen.src += ${data.image};
    // imagen.alt += ${data.name} + "'s picture profile";
    // imagenCharacter.appendChild(imagen);
    imagenCharacter.innerHTML += 
    `<div class="card-wrap">
      <div class='profile-card'>
        <div class = 'front'>
          <img src=${data.image} alt = "${data.name}'s perfil image">
          <h1>${data.name}</h1>
        </div>
        <div class = 'back'>
          <h2>${data.name}</h2>
          <p>${data.species} /
            <img src="/src/img/heart-icon.png" alt="heart-icon">
            ${data.status}
          </p>
          <div class = 'back-info'>
            <p><span>Gender:</span> ${data.gender}</p>
            <p><span>Origin:</span> ${data.origin.name}</p>
            <p><span>Location:</span> ${data.location.name}</p>
            <p><span>First appearance:</span></p>
          </div>
        </div>
      </div>
    </div>
 `
}

//Render all characters
export function renderAllCharacters(allData) {
  allData.forEach(data => {
    
    imagenCharacter.innerHTML += 
    `<div class="card-wrap">
      <div class='profile-card'>
        <div class = 'front'>
          <img src=${data.image} alt = "${data.name}'s perfil image">
          <h1>${data.name}</h1>
        </div>
        <div class = 'back'>
          <h2>${data.name}</h2>
          <p>${data.species} /
            <img src="/src/img/heart-icon.png" alt="heart-icon">
            ${data.status}
          </p>
          <div class = 'back-info'>
            <p><span>Gender:</span> ${data.gender}</p>
            <p><span>Origin:</span> ${data.origin.name}</p>
            <p><span>Location:</span> ${data.location.name}</p>
            <p><span>First appearance:</span></p>
          </div>
        </div>
      </div>
    </div>
 `
  });
}


if(location.href == "http://127.0.0.1:5500/index.html"){
  dataApi2(apiUrl);
} else if (location.href == "http://127.0.0.1:5500/src/allCharacters.html") {
  dataApi(apiUrlAllCharacters); 
}
// seeMoreButton.addEventListener('click', function (event) {
//   console.log("click");
// });
