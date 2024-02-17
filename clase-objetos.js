/* obj --> es una estructura de datos que permiten guardar la key / value

obj {
  propiedad: valor,
  propiedad: valor
}

*/

const persona = {
  nombre: 'Jhon',
  edad: 30,
  address: {
    calle: 'Av Insurgente 187',
    ciudad: 'CDMX',
  },
  saludar() {
    console.log(`Hola, mi nombre es ${persona.nombre}`);
  },
};

console.log(persona);

console.log(persona.nombre);
persona.saludar();

persona.telefono = '2613869204';
console.log(persona.telefono);

persona.despedir = () => {
  console.log('Adios!!');
};

persona.despedir();

console.log(persona.address.calle);

delete persona.telefono;

delete persona.despedir();
