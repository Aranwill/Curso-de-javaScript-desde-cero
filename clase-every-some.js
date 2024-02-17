// Methods that DO NOT modify the original array (Inmutability).

const ages = [21, 25, 30, 19, 22];

// every() → Retorna true si todos los elementos del arreglo cumplen la función callback

const allAreAdult = ages.every(age => age > 20);

console.log(ages);
console.log(allAreAdult);

// some() → Retorna true si al menos un solo del arreglo cumplen la función callback

const atLeastOneIsOver30 = ages.some(age => age > 29);

console.log(ages);
console.log(atLeastOneIsOver30);
