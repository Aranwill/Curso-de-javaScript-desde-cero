// Creacionde strings
const primeraOpcion = 'comillas simples';
const segundaOpcion = 'comillas simples';
const terceraOpcion = `comillas simples`;

// 1. Concatenacion: Opcion +
const direccion = 'Calle falsa 123';
const ciudad = 'Sprinfield';
const direccionCompleta = 'Mi direccion completa es ' + direccion + ciudad;
console.log(direccionCompleta);

const direccionCompletaConEspacio =
  'Mi direccion completa es ' + direccion + ' ' + ciudad;
console.log(direccionCompletaConEspacio);

// 2. Concatenacion: Template Literals
const nombre = 'Hector';
const pais = '🇦🇷';
const presentacion = `Hola, soy ${nombre} de ${pais}`;
console.log(presentacion);

//3. Concatenacion: Join()

const primeraParte = 'Me encanta';
const segundaParte = 'la gente de';
const terceraParte = '🇲🇽';
const pesamiento = [primeraParte, segundaParte, terceraParte];
console.log(pesamiento.join(' 🌯 '));

//4. Concatenacion: concat()

const hobbie1 = '🏃‍♂️';
const hobbie2 = '🏋️‍♀️';
const hobbie3 = '🏂';
const hobbies = 'Mis hobbies son: '.concat(
  hobbie1,
  ', ',
  hobbie2,
  ', ',
  hobbie3,
  '. '
);
console.log(hobbies);

// Caracteres de escape
// const whatDoiDo = 'I'm Software Engineer'

//1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer";

// 2. Barra Invertida
const escapebarraInvertida = "I'm Software engineer"; // <== I\m'

// 3. Template Literals
const escapeConComillaInvertida = `I'm Software Engineer`;

// Escritura de strings largos
/*
  Las rosas son rojas,
  las violetas son azules,
  Caracter ineperado,
  en la linea 86.
*/

const poema =
  'Bajo el cielo estrellado,\n' +
  'un sueño despierto guardado.\n' +
  'En el silencio de la noche,\n' +
  'mi corazón al tuyo se encoje.';

console.log(poema);

const poema2 = `Bajo el cielo estrellado,
un sueño despierto guardado.
En el silencio de la noche,
mi corazón al tuyo se encoje.`;

console.log(poema2);

const poema3 = `En el vasto mar de código, navegamos,
Bugs y errores, valientemente enfrentamos.
Con cada línea, un nuevo amanecer,
En el mundo de la programación, siempre hay algo que aprender.`;

console.log(poema3);
