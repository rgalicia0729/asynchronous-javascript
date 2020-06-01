/**
 * Ejemplo de asincronismo utilizando async await
 */

const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    true 
    ? setTimeout(() => resolve('Todo salio muy bien'), 2000) 
    : reject(new Error('Algo salio mal'));
  });
};

const callAsyncFunction = async () => {
  try {
    const resolve = await asyncFunction();
    console.log(resolve);
  } catch (error) {
    console.log(error);
  }
}

console.log('Before');
callAsyncFunction();
console.log('After');

