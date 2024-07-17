import { dataAllCharacters } from './data.js';
import { dataMainCharacters } from './data.js';
import { loadAllCharacters } from './data.js';
// import allCharactersData from './allCharactersData/lol/lol.js';
// import allCharactersData from './allCharactersData/pokemon/pokemon.js';
// import allCharactersData from './allCharactersData/rickandmorty/rickandmorty.js';

const imagenCharacter = document.querySelector('.card-container');
const loaderContainer = document.querySelector('.loader-container')
const form = document.querySelector('.search');
const inputSearch = document.querySelector('#search');
const seeMoreButton = document.querySelector('#seeMore-button');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const checkAZRadio = document.querySelector('#sortByLetterAZ');
const checkZARadio = document.querySelector('#sortByLetterZA');
const checkRadio = document.getElementsByName('sortByLetter')

const apiUrlAllCharacters = 'https://rickandmortyapi.com/api/character';
let apiUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4,5';
const apiUrlEpisode = 'https://rickandmortyapi.com/api/episode'


//Search input
form.addEventListener('submit', function (event) {
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
//   dataMainCharacters();
// }


//Render main characters
export function renderMainCharacters(allData) {
  console.log(allData);
  allData.forEach(allCharactersData => {
    imagenCharacter.innerHTML +=
      `<div class="card-wrap">
      <div class='profile-card'>
        <div class = 'front'>
          <img src=${allCharactersData.image} alt = "${allCharactersData.name}'s perfil image">
          <h1>${allCharactersData.name}</h1>
        </div>
        <div class = 'back'>
          <h2>${allCharactersData.name}</h2>
          <p>${allCharactersData.species} /
            <img src="/src/img/heart-icon.png" alt="heart-icon">
            ${allCharactersData.status}
          </p>
          <div class = 'back-info'>
            <p><span>Gender:</span> ${allCharactersData.gender}</p>
            <p><span>Origin:</span> ${allCharactersData.origin.name}</p>
            <p><span>Location:</span> ${allCharactersData.location.name}</p>
            <p><span>First appearance:</span> ${allCharactersData.episode[0].substr(-1)}</p>
          </div>
        </div>
      </div>
    </div>
 `
  });
}

//Render all characters
export function renderAllCharacters(allCharactersData, episodes) {
  // console.log(allCharacterData.results, "allData");

  for (let index = 0; index < allCharactersData.results.length; index++) {
    // console.log(allCharactersData.results[index].name ,allCharactersData.results[index].url,"Episode: " + episodes.results[index].url);
    if (allCharactersData.results[index].url == episodes.results[index].url) {
      console.log(allCharactersData.results[index].name);
      
    }
  }
//   allCharactersData.results.forEach(allCharactersData => {
//     //   console.log(allCharactersData);
//     imagenCharacter.innerHTML +=
//       `<div class="card-wrap">
//       <div class='profile-card'>
//         <div class = 'front'>
//           <img src=${allCharactersData.image} alt = "${allCharactersData.name}'s perfil image">
//           <h1>${allCharactersData.name}</h1>
//         </div>
//         <div class = 'back'>
//           <h2>${allCharactersData.name}</h2>
//           <p>${allCharactersData.species} /
//             <img src="/src/img/heart-icon.png" alt="heart-icon">
//             ${allCharactersData.status}
//           </p>
//           <div class = 'back-info'>
//             <p><span>Gender:</span> ${allCharactersData.gender}</p>
//             <p><span>Origin:</span> ${allCharactersData.origin.name}</p>
//             <p><span>Location:</span> ${allCharactersData.location.name}</p>
//             <p><span>First appearance:</span></p>
//           </div>
//         </div>
//       </div>
//     </div>
// `
//   });
}

export function loader() {
  return (
    loaderContainer.innerHTML =
    `<div class="lds-ripple"><div></div><div></div></div>`
  )
}


if (location.href == "http://127.0.0.1:5500/index.html") {
  dataMainCharacters(apiUrl);

} else if (location.href == "http://127.0.0.1:5500/src/pages/allCharacters.html") {
  // dataAllCharacters(apiUrlAllCharacters);

  loadAllCharacters(apiUrlAllCharacters, apiUrlEpisode)
}
// console.log(apiUrlAllCharacters, "apiUrlAllCharacters");
// seeMoreButton.addEventListener('click', function (event) {
//   console.log("click");
// });
