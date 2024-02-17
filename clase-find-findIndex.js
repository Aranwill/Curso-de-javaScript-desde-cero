// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Inmutabilty).

// find()

const multipleOF5 = [5, 10, 15, 20];

const firtsNumberGreaterThan10 = multipleOF5.find(number => number > 10);

console.log(multipleOF5);
console.log(firtsNumberGreaterThan10);

// findIndex()

const randomNumber = [6, 14, 27, 56, 40];
const indexNumber = randomNumber.findIndex(number => number > 50);

console.log(randomNumber);
console.log(indexNumber);

/* 
Raffle Winner Verification
Program In this program, you can verify if a person is among the list of winners in a raffle. Simply 
input the name or ticket number, and the program will check and display the winner's information.

Programa de Verificación de Ganadores de Rifa

En este programa, puedes verificar si una persona está entre los ganadores de una rifa. Simplemente 
ingresa el nombre o número de boleto, y el programa verificará y mostrará la información del 
ganador.

Curso de JavaScript desde Cero

*/

//Verification Program

const winningPaticipants = [
  { id: 1, name: 'Jeniffer', ticketNumber: 1 },
  { id: 8, name: 'Michael', ticketNumber: 8 },
  { id: 15, name: 'Emily', ticketNumber: 15 },
  { id: 47, name: 'Charlie', ticketNumber: 47 },
];

function findWinnerByName(name) {
  const winner = winningPaticipants.find(
    participants => participants.name === name
  );
  return winner || 'No winner found with that name. ';
}

function findWinnerByTicket(ticketNumber) {
  const index = winningPaticipants.findIndex(
    participants => participants.ticketNumber === ticketNumber
  );
  return index !== -1 ? index : 'No winner found with tha ticket number. ';
}

function displayWinnerInformation(winner) {
  if (
    winner !== undefined &&
    winner != null &&
    winner !== 'No winner found with that name.'
  ) {
    console.log('Winner information: ', winner);
  } else {
    console.log('No winner found. ');
  }
}

const WinnerByName = findWinnerByName('Emily');
const indexWinnerByTicket = findWinnerByTicket(8);

displayWinnerInformation(WinnerByName);
console.log('index of Winner by Ticket Number: ', indexWinnerByTicket);
