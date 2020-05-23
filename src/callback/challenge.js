/** 
 * A continuacion se muestra un ejemplo de como realizar peticiones a API
 * utilizando callbacks, para ello utilizamos una API de rick and morty
 * url: https://rickandmortyapi.com/api/character
 */
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API_URL = 'https://rickandmortyapi.com/api/character/';

/** Generamos nuestra funccion para obtener la data utilizando callback */
function fetchData (api_url, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', api_url);
  xhttp.onreadystatechange = function(event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        let error = new Error('Error ' + api_url);
        return callback(error, null);
      }
    }
  }
  xhttp.send()
};

/** Realizando el llamado a API con callback, callback hell */
fetchData(API_URL, function(error1, data1) {
  if (error1) console.error(error1);
  fetchData(API_URL + data1.results[0].id, function(error2, data2) {
    if (error2) console.error(error2);
    fetchData(data2.origin.url, function(error3, data3) {
      if (error3) console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  })
})