/* 
Crear un programa que simule un stack usando los metodos push y pop. 

El stack debe guardar una coleccion de libros. 

El usuario puede realizar las siguientes acciones:

 - Agregar un libro al tope del stack 

 - Sacar un libro del tope del stack 

 - Mostrar todos los libros Se debe implementar un loop que permita al usuario realizar estas acciones hasta que decida salir. 

*/

let bookCart = [];

const ADD_TO_CART = 'addToCart';
const REMOVE_FROM_CART = 'removeFromCart';
const VIEW_CART_ACTION = 'viewCart';

function viewCart() {
  console.log('Current cart of Books: ', bookCart);
}

function performCartActions(action, newBook) {
  switch (action) {
    case ADD_TO_CART:
      bookCart.push(newBook);
      break;
    case REMOVE_FROM_CART:
      if (bookCart.length === 0) {
        console.log('Cart is empty. No books to remove');
      } else {
        const removedBook = bookCart.pop();
        console.log(`Removed book from the cart: ${removedBook}`);
      }
      break;
    case VIEW_CART_ACTION:
      viewCart();
      break;
    default:
      console.log('Invalid action. Please choose a valid option.');
  }
}

performCartActions(
  ADD_TO_CART,
  'Como ganar amigos e influir sobre las personas'
);
performCartActions(VIEW_CART_ACTION);
performCartActions(ADD_TO_CART, 'El arte de hacer amigos');
performCartActions(VIEW_CART_ACTION);
performCartActions(REMOVE_FROM_CART, 'El arte de hacer amigos');
performCartActions(VIEW_CART_ACTION);

/*-----------------------------------------------------------------------------------------------------------------------*/
