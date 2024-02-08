// Methods tha iterate over an array.
// Methods tha DO NOT modify the origunal array (Inmutability)

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(numbers);
console.log(evenNumbers);

// reduce() . Case 1

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(numbersReduce);
console.log(sum);

// reduce() . Case 2

const words = ['Apple', 'Banana', 'hello', 'bye', 'Banana', 'bye', 'Banana'];

const wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(words);
console.log(wordFrecuency);

// Excercise: Passing Grade Average

/*

Passing Grade Average

Create a program that takes an array of grades as input and calculates the average only for passing 
grades (greater than or equal to 70).

*/

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94];

const passingGrades = grades.filter(grade => grade >= 70);

const averagePassingGrade =
  passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length;

console.log('Original grades: ', grades);
console.log('Pasing Grades: ', passingGrades);
console.log('Average Passing Grade: ', averagePassingGrade);

/*--------------------------------------------------------------------------------------------------------------------------- */

const grades2 = [85, 92, 60, 78, 95, 66, 88, 50, 94];

let passingGrades2 = grades.reduce((acc, sum) => acc + sum, 0) / grades.length;

console.log(passingGrades2);

if (passingGrades2 >= 70 ? console.log('Approved') : console.log('Reproached'));
