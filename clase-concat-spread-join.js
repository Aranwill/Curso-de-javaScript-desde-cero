// Methods that DO NOT modify the original array (Inmutability).

const morseCode1 = ['....', '---']; // H O
const morseCode2 = ['.-..', '.-']; // L A

// combine with concat() * way 1

const morseCodeMessage = morseCode1.concat(morseCode2);

console.log(morseCode1);
console.log(morseCode2);
console.log('morseCodeMessage', morseCodeMessage);

// combine with concat() * way 2

const morseCodeMessage2 = [].concat(morseCode1, morseCode2);

console.log(morseCode1);
console.log(morseCode2);
console.log('morseCodeMessage2', morseCodeMessage2);

// Combine with Spread Operator

function combineMorseMessage(morseCode1, morseCode2) {
  console.log('Spread Operator: ', [...morseCode1, ...morseCode2]);
}

combineMorseMessage(morseCode1, morseCode2);

const numbers = [1, 2, 3];
const string = 'string';

combineMorseMessage(numbers, string);

// join()

const morseCodeMesageString = morseCodeMessage.join(' e ');

console.log(morseCode1);
console.log(morseCode2);
console.log('morseCodeMesageString: ', morseCodeMesageString);
