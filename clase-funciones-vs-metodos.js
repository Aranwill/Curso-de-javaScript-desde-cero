// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos => callback
/*
function a() {}
function b(a) {}
b(a);

// Retornar funciones => Declaracion d efuncion

function a() {
  function b(a) {}
  return b;
}

// Asingnar funciones a variables => Expresion de funcion

const a = function () {};

// Tener propiedades y metodos

function a() {}
const obj = {};
a.call(obj);

// Anidar funciones => Nested functions

function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();
*/
// Es posible almacenar funciones en objeto

const rocket = {
  name: 'Falcon 9',
  launchMessage: function launcMessage() {
    console.log('🔥');
  },
};

rocket.launchMessage();
