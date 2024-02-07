// let nombre = 'Hec';

// if (nombre === 'Hector') {
//   console.log('Hola Hector');
// } else if (nombre === 'Hec') {
//   console.log('Hola Hec');
// } else {
// }
/*------------------------------------------------------------------------*/
const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
  prompt('Adivina el numero secreto entre el 1 al 10')
);

console.log(`Este es el numero con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
  console.log('🎊🎉!Felicidades, adivinaste el numero secreto!🎉🎊');
} else if (numeroJugador < numeroSecreto) {
  console.log('El numero es demasiado bajo, intenta de nuevo');
} else {
  console.log('El numero es demasiado alto, intenta de nuevo');
}

console.log(`Este es el numero secreto ${numeroSecreto}`);

/*------------------------------------------------------------------------*/

// const numberSecret = Math.floor(Math.random() * 10 + 1);
// console.log(numberSecret);

// const numberPlayer = parseInt(
//   prompt('Ingresa un numero para jugar y adivinar el numero secreto')
// );
// console.log(numberPlayer);

// if (numberPlayer === numberSecret) {
//   alert('🎊🎉!Felicidades! Adivinaste el numero secreto 🎉🎊');
//   location.reload();
// } else {
//   alert('!Fallaste! Intenta nuevamente');
//   location.reload();
// }
