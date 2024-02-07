// Funciones Puras

// Site effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o en consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual

// Es una funcion pura
function sum(a, b) {
  return a + b;
}

// Es una funcion Impura
function sum(a, b) {
  console.log('A: ', a);
  return a + b;
}

// Es una funcion Impura
let total = 0;

function sumWithSideEffect(a) {
  total += a;
  return total;
}

//Es una funcion pura
function square(x) {
  return x * x;
}

//Es una funcion pura
function addTen(y) {
  return y + 10;
}

//Es una funcion pura
const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);
