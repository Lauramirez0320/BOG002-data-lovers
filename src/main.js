import {  dataApi } from './data.js';
import { dataApi2 } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const imagenCharacter = document.querySelector('.card-container');
const form = document.querySelector('.search');
const inputSearch = document.querySelector('#search');
const seeMoreButton = document.querySelector('#seeMore-button');

const apiUrlAllCharacters = 'https://rickandmortyapi.com/api/character';
let apiUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4,5';


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

//Render characters
export function renderCharacters(data) {
    // let imagen = document.createElement("img");
    // let charachterName = document.createElement("")
    // imagen.src += ${data.image};
    // imagen.alt += ${data.name} + "'s picture profile";
    // imagenCharacter.appendChild(imagen);
    imagenCharacter.innerHTML += 
    `<div class='profile-card'>
    <img src=${data.image} alt = "${data.name}'s perfil image">
    <h1>${data.name}</h1>
 </div>`
}

//Render all characters
export function renderAllCharacters(allData) {
  allData.forEach(data => {
    imagenCharacter.innerHTML += 
    `<div class='profile-card'>
    <img src=${data.image} alt = "${data.name}'s perfil image">
    <h1>${data.name}</h1>
 </div>`
  });
}

if(location.href == "http://127.0.0.1:5500/src/index.html"){
  dataApi2(apiUrl);
} else if (location.href == "http://127.0.0.1:5500/src/all.html") {
  dataApi(apiUrlAllCharacters); 
}
// seeMoreButton.addEventListener('click', function (event) {
//   console.log("click");
// });
