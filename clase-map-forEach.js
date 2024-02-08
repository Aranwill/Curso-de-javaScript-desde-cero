// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Inmutability)

// map()

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(num => num * num);

console.log(numbers);
console.log(squareNumbers);

// ForEach()

const colors = ['Red', 'Pink', 'Blue'];
const iteratedColors = colors.forEach(color => console.log(color));

console.log(colors);
console.log(iteratedColors);

// Excercise: Farenheit to Celsius convesation

const temperaturesInFarenheit = [32, 68, 95, 104, 122];

const temperaturesInCelsius = temperaturesInFarenheit.map(
  farenheit => (5 / 9) * (farenheit - 32)
);

console.log('Temperatures In Farenheit: ', temperaturesInFarenheit);
console.log('Temperatures In Celsius: ', temperaturesInCelsius);

//Excercise: Sum of Elements in an Array

const newNumbers = [1, 2, 3, 4, 5];

let sum = 0;

newNumbers.forEach(number => {
  sum += number;
});

console.log('Array of Numbers: ', newNumbers);
console.log('Sum of Numbers: ', sum);
