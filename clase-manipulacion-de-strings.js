// String Primitivos - string Inmutables (para modificar el valor se crea uno nuevo)

const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo); // <== Devuelve el tipo de string

const stringPrimitivoTambien = String('Soy un string primitivo tambien');
console.log(typeof stringPrimitivoTambien); // <== Devuelve el tipo de string

// String objeto - son mutables

const stringObjeto = new String('Soy un string objeto'); // <== los objetos String se crean con el constructor new String().
console.log(typeof stringObjeto); // <== Devuelve un objeto

// Acceder a caracteres

const saludo = 'Hola. ¿Como estas?';

console.log(saludo[2]); // <== imprime el tercer carácter de saludo - en JS los indices comienzan en 0
console.log(saludo.charAt(2)); //<== otra forma de acceder a los caracteres de un string
console.log(saludo.indexOf('o')); // <== forma de saber la poscion de la letra que queremos
console.log(saludo.indexOf('Como')); // <== forma de saber la posicion de una palabra
console.log(saludo.indexOf('como')); // <== recuerda que JS es key sensitive, es decir, sensible a caracteres como mayusculas y minusculas, por ende el resultado sera de -1. ya que no encuentra la palabra
console.log(saludo.lastIndexOf('o')); // <== forma de saber la posicion de las letras que queremos
console.log(saludo.slice(3, 5)); // <== formar de encontrar letras en un string por su posicion
console.log(saludo.length); // <== para saber la longitud de un string
console.log(saludo.toLocaleUpperCase()); // <== para pasar todo a mayusculas
console.log(saludo.toLocaleLowerCase()); // <== para pasar todo a minusculas

const saludoDividido = saludo.split(' ');
console.log(saludoDividido); // <== para dividir el string a partir de los espacios que encuentres - duvuelve un array comn el string
console.log(saludoDividido[1]); // para acceder a las posiciones del array

const saludoConEspacios = ' Hola Mundo ';
const saludoSinEspacios = saludoConEspacios.trim();
console.log(saludoSinEspacios); // <== para retornar un string sin espacios al inicio o al final

const saludoOriginal = 'Hola Mundo';
const nuevoSaludo = saludoOriginal.replace('Mundo', '💚');
console.log(nuevoSaludo); // <== para reemplazar palabras de un string
