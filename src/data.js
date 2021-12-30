
import { renderAllCharacters, renderMainCharacters, loader } from './main.js';
// import { renderMainCharacters } from "./main.js";


export function dataMainCharacters(endpoint) {
  fetch(endpoint)
    .then(response => {
      return response.json();
    }).then(info => {
      renderMainCharacters(info)

    }).catch(error => {
      console.log(error);
    })
};

export function dataAllCharacters(endpoint) {
  fetch(endpoint)
    .then(response => {
      return response.json();
    }).then(info => {
      renderAllCharacters(info)

    }).catch(error => {
      console.log(error);
    })
};

export async function loadAllCharacters(charactersEndPoint, episodesEndPoint) {
  try {
    loader();
    let response = await fetch(charactersEndPoint),
      dataAllCharacters = await response.json();
      // console.log(dataAllCharacters);
      // if (!response.ok) throw {status:response.status, statusText: response.statusText}
      try {
        let response = await fetch(episodesEndPoint),
        dataAllEpisodes = await response.json();
        // console.log(dataAllEpisodes.results[0].url);
        renderAllCharacters(dataAllCharacters, dataAllEpisodes);
      } catch (error) {
        console.log(error);
      }

  } catch (error) {
    console.log(error);
  }

  
  // for (let index = 0; index < dataAllCharacters.results.length; index++) {
  //   // console.log(dataAllCharacters.results[index], dataAllCharacters.results[index].episode[0]);
  //   if (dataAllCharacters.results[index].episode[0] == dataAllEpisodes.results[0].url) {
  //     console.log("True");
  //   }
  // }
  
}


// filterData(data, condition): esta función filter o filtrar recibiría la data,
//y nos retornaría aquellos datos que sí cumplan con la condición.

// export function filterData(data, condition) {
//   if (condition == )
// }
// sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros.
//El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
// computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.

// let dataAllCharacters = {
//     allDataRickAndMorty: requiredData,
//     filterData: function (data, condition){
//         return this.allDataRickAndMorty.filter()
//     }
// }
