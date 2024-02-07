// const secretWord = 'Cacahuate';
// let intentos = 3;

// function verificarPalabra(suposicion, secretWord) {
//   if (suposicion.toLowerCase() === secretWord) {
//     return true;
//   }
//   return false;
// }

// function gameAdivinaLaPalabra() {
//   alert('Bienvenido a jugar a adivina la palabra oculta');
//   alert('Tienes 3 intentos para divinar la palabra');
//   alert('-pista- la palabra oculta es de uso cotidiano entre ambos');

//   while (intentos > 0) {
//     let suposicion = prompt('Adivina la palabra: ');

//     if (suposicion === secretWord) {
//       alert('¡CORRECTO! Adivinaste la palabra');
//       break;
//     } else {
//       intentos--;
//       if (intentos > 0) {
//         alert(`Incorrecto, Aun tienes ${intentos} intentos restantes`);
//       }
//     }
//   }
//   if (intentos === 0) {
//     alert(`Agotaste tus intentos, la palabra secreta era ${secretWord}`);
//   }
// }

// gameAdivinaLaPalabra();

// const palabra_oculta = 'montaña';
// const pista = 'Tan alta, Tan grande y tan fuerte que nadie le gana';
// let vidas = 3;

// alert('iniciemos el juego');
// alert('estas listo?');
// alert('ADIVINA LA PALABRA');
// alert(pista);

// while (vidas > 0) {
//   let suposicion = prompt('cual es la palabra?');
//   let word_planed = suposicion.toLocaleLowerCase();

//   if (palabra_oculta === word_planed) {
//     alert('CORRECTO, GANASTE');
//     break;
//   } else if (palabra_oculta !== word_planed) {
//     vidas -= 1;
//     alert(`FALLASTE, te quedan ${vidas}`);
//   }
// }

// if (vidas === 0) {
//   alert(`la palabra oculta era => ${palabra_oculta}`);
// }

alert('Hola! tienes 3 intentos para adivinar');
let input = '';
let attemps = 3;
const palabraSecreta = 'meme';
const palabraSecretaAux = palabraSecreta.toLocaleLowerCase();

while (attemps > 0) {
  input = prompt(
    '-pista- la palabra oculta es de uso cotidiano entre ambos 🤩🤩'
  );
  attemps--;
  if (input === palabraSecretaAux) {
    alert('¡ADIVINASTE!🥰🥰😘');
    break;
  }
  if (attemps === 0) {
    alert(
      `Te quedaste sin intentos, la palabra secreta era 😍 ${palabraSecreta} + 🥰🥰😘`
    );
  }
}
