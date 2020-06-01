/** 
 * Ejemplo de la estructura de una promesa, las promesas
 * nos permiten ejecutar codigo asincrono sin caer en callbakhell
 */

const examplePromise = () => {
  return new Promise((resolve, reject) => {
    false ? resolve('Todo salio muy bien') : reject(new Error('Algo salio mal'));
  });
};

/** 
 * Asi es como se ejecuta una promesa
*/

examplePromise()
  .then(resolve => console.log(resolve))
  .catch(error => console.error(error));