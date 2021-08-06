// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

import {
  renderCharacters
} from './main.js';
import {
  renderAllCharacters
} from "./main.js";

export function dataApi(endpoint) {
  fetch(endpoint)
    .then(response => {
      return response.json();
    }).then(info => {
      const list = info.results;
      list.forEach(element => {
        renderCharacters(element)
      });

    }).catch(error => {
      console.log(error);
    })
};


export function dataApi2(endpoint) {
  fetch(endpoint)
    .then(response => {
      return response.json();
    }).then(info => {
      renderAllCharacters(info)

    }).catch(error => {
      console.log(error);
    })
};

// dataApi()
// const requiredData = require('./data/rickandmorty/rickandmorty.json');
// console.log(dataRAndM);

// let dataApi = {
//     allDataRickAndMorty: requiredData,
//     filterData: function (data, condition){
//         return this.allDataRickAndMorty.filter()
//     }
// }
