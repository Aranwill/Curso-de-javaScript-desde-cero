//Paso por valor

let x = 1;
let y = 'Hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c);

a = 12;
b = 'Platzi';
c = undefined;

console.log(x, y, z, a, b, c);

//Paso por referencia

let frutas1 = ['manzana'];
frutas1.push('pera');
console.log(frutas1);

let panes = ['🥐'];
let copiaDePanes = panes;
panes.push('🥖');
console.log(panes, copiaDePanes);

// Tipo de dato complejo - Paso por referencia

let frutas = {
  naranja: '🍊',
};
let vegetales = frutas;

vegetales.naranja = '🥦';
console.log(frutas);

let ropa = {
  blusa: '👚',
};

ropa.pantalon = '👖';
console.log(ropa);
