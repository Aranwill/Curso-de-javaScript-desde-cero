// Methods tha modify the original array (Mutability)

// splice()

const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato'];
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion');

console.log(vegetables);
console.log(removedVegetables);

// reverse()

const numbers = [1, 2, 3, 4, 5];
const reverseNumbers = numbers.reverse();

console.log(numbers);
console.log(reverseNumbers);

// Sort() with number

const unsortedNumbers = [4, 18, 1, 62, 34];
const unicodeSortedNumbers = unsortedNumbers.sort();

console.log(unsortedNumbers);
console.log(unicodeSortedNumbers);

const unsortedNumbers2 = [4, 18, 1, 62, 34];
const SortedNumbers = unsortedNumbers2.sort((a, b) => a - b);

console.log(unsortedNumbers2);
console.log(SortedNumbers);

// sort() with strings * UTF-16

const cities = ['New York', 'Paris', 'Tokio', 'London'];
const sortedCities = cities.sort();

console.log(cities);
console.log(sortedCities);

// Fill()

const ages = [21, 35, 45, 50];
console.log(ages.fill(0, 2, 4));
console.log(ages.fill(15, 1));
console.log(ages.fill(15));
