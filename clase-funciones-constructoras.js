const personalizedMessage = () => 'GoodBye everbody 🚀!';

function Rocket(name, ownMessage) {
  this.name = name;
  this.launchMessage = ownMessage;
}

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage);
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage);
console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());

const RocketWithArrowFunction = (name, ownMessage) => ({
  name: name,
  launchMessage: ownMessage,
});

const personalizedMessageForArrowFunction = () => 'Successful Launch 🔥!';

const falcon9Rocket1 = RocketWithArrowFunction(
  'Falcon 9',
  personalizedMessageForArrowFunction
);

console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());
