// slice() --> se utiliza en arrays para devolver una porción (subconjunto) de ese array, sin modificar el array original.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 6));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());
