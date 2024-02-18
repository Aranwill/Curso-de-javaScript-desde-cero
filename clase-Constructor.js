/*
let persona = {
  nombre: 'Hector',
  apellido: 'Rodriguez',
  edad: 37,
};
*/

function Persona(nombre, apellido, edad) {
  this.nombre = nombre, 
  this.apellido = apellido;
  this.edad = edad;
}

const persona1 = new Persona('Juan', 'Perez', 20);

console.log(persona1);

persona1.nacionalidad = 'Mexicano';

console.log(persona1);

const persona2 = new Persona('Hector', 'Rodriguez', 37);

console.log(persona2);

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona1.saludar();
persona2.saludar();
