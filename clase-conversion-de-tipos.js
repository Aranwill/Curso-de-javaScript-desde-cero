// Explicit Type Casting

const string = '42';
const integrer = parseInt(string); // <== Convierte el string a number
console.log(integrer);
console.log(typeof integrer);

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal); // <== Convierte el string a number con decimal
console.log(float);
console.log(typeof float);

const binary = '1010';
const decimal = parseInt(binary, 2); // <== Convertir a binario
console.log(decimal);
console.log(typeof decimal);

// Implicit Type Casting

const sum = '5' + 3;
console.log(sum);

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean);

const sumWithNumber = 2 + true;
console.log(sumWithNumber);

const strinValue = '10';
const numberValue = 10;
const booleanValue = true;
console.log('--------------');
console.log(strinValue + strinValue); // Concatena
console.log(strinValue + numberValue); // Concatena
console.log(strinValue + booleanValue); // Concatena

console.log(numberValue + strinValue); // Concatena
console.log(numberValue + numberValue); // Suma
console.log(numberValue + booleanValue); // Suma

console.log(booleanValue + strinValue); // Concatena
console.log(booleanValue + numberValue); // Suma
console.log(booleanValue + booleanValue); // Suma

const numero = '596';
const numeroConvertido = parseInt(numero);

console.log(typeof numero);
console.log(typeof numeroConvertido);
