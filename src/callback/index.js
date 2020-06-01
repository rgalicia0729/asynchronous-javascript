/**
 * Un callback es una funcion que resive como parametro otra funcion.
 */

/**
 * Ejemplo simple de como funcionan los callback, una funcion simple 
 * utilizando callback para sumar dos valores.
 */

const suma = (num1, num2) => {
  return num1 + num2;
}

const calcular = (num1, num2, suma) => {
  return suma(num1, num2);
}

console.log(calcular(5, 6, suma));