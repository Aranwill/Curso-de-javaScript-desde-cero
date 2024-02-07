// Enlace implicito o implicit binding

const house = {
  dogName: 'Kovu',
  dogGreeting: function () {
    console.log(`Hi, I'm ${this.dogName}`);
  },
};

house.dogGreeting();

// Enlace explicito o explicit binding

function dogGreeting() {
  console.log(`Hi, I'm ${this.dogName}`);
}

const newHouse = {
  dogName: 'Dober',
};

dogGreeting.call(newHouse);

function newDogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and live with ${owner} on ${address}`);
}

const owner = 'Lucy';
const address = 'Avenue 123';
newDogGreeting.call(newHouse, owner, address);
