/*

for in  ---> obj 

propiedades = valor

array, string 

item

for (variable in objeto) {
  codigo a ejecutar
}

*/

const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

for (fruta in listaDeCompras) {
  console.log(fruta);
}

for (fruta in listaDeCompras) {
  //Propiedad-----------Valor
  console.log(`${fruta} : ${listaDeCompras[fruta]}`); // para recorrer el objeto con sus propiedades y valor
}

// for (fruta of listaDeCompras) {
//   console.log(fruta);
// }
