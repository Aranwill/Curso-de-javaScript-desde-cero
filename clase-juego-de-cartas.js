/*
Ejercicio: Implementación de un Juego de 
Cartas

Exercise: Card Game Implementation

Imagine you're building a simple card game. You have an array representing a deck of cards, and you 
want to perform the following operations:

1. Shuffle the Deck: Randomly rearrange the order of the cards in the deck.

2. Deal Cards: Deal a specific number of cards to players from the top of the deck. This exercise 
involves using the splice() method to shuffle the deck and deal cards.

Ejercicio: Implementación de un Juego de Cartas

Supongamos que estás construyendo un juego de cartas simple. Tienes un array que representa un 
mazo de cartas y deseas realizar las siguientes operaciones:

1. Barajar el Mazo: Reorganizar aleatoriamente el orden de las cartas en el mazo.

2. Repartir Cartas: Repartir una cantidad específica de cartas a los jugadores desde la parte 
superior del mazo. Este ejercicio implica el uso del método splice() para barajar el mazo y 
repartir las cartas.

Curso de JavaScript desde Cero

*/

// Excercise: Card Game Implementation

const deck = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Fisher-Yates Algorithm
/*
El algoritmo Fisher-Yates, también conocido como el algoritmo de mezcla o barajado, es un método eficiente para barajar o permutar aleatoriamente un conjunto finito de elementos. Este algoritmo garantiza que todas las permutaciones posibles sean igualmente probables.

Aquí está cómo funciona el algoritmo Fisher-Yates:

Inicialización:

Comenzamos con una lista de elementos (por ejemplo, un array).
Recorrido inverso:

Empezamos desde el último elemento y avanzamos hacia atrás.
Para cada elemento en la lista, seleccionamos un elemento aleatorio entre los elementos no procesados (incluyendo el elemento actual) y lo intercambiamos con el elemento actual.
Resultado:

Después de recorrer todos los elementos, la lista estará completamente barajada.
*/

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function dealCards(numCard) {
  const dealCards = deck.splice(0, numCard);
  return dealCards;
}

shuffleDeck();

const player1Hand = dealCards(3);
const player2Hand = dealCards(3);
const player3Hand = dealCards(3);

console.log('Player 1 Hand: ', player1Hand);
console.log('Player 2 Hand: ', player2Hand);
console.log('Player 3 Hand: ', player3Hand);
