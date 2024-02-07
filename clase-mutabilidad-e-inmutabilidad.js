// Mutability

const fruits = Array('apple', 'banana', 'orange');

fruits.push('watermelon');
console.log(fruits);

// Inmutability

const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(fruits);
console.log(newFruits);

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits);
console.log(isArray);

// Practical Excercise; sum all elements of an array

const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}

console.log(sum);
