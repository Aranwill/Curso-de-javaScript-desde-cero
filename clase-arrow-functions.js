const greeting = function (name) {
  return `Hi, ${name}`;
};

// Arrow function - explicit return

const newGreeting = name => {
  return `Hi, ${name}`;
};

// Arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`;
const newGreetingImplicitWithTwoParameter = (name, lastName) =>
  `Hi, I'm ${name} ${lastName}`;

// Lexical Binding

const finctionalCaracter = {
  name: 'Uncle Ben',
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: message => {
    console.log(`${this.name} says: ${message}`);
  },
};

finctionalCharacter.messageWithTraditionalFunction(
  'With great power comes great responsability.'
);
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.');

// Para que la función de flecha pueda acceder al nombre del personaje, puedes definirla dentro de una función tradicional en el objeto. Aquí te muestro cómo:

const fictionalCharacter = {
  name: 'Uncle Ben',
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: function (message) {
    const arrowFunction = () => {
      console.log(`${this.name} says: ${message}`);
    };
    arrowFunction();
  },
};

fictionalCharacter.messageWithTraditionalFunction(
  'With great power comes great responsability.'
);
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.');
