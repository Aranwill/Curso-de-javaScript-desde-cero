// Create PowerfullGirl objets

function PowerpuffGirl(name, color, superpower) {
  (this.name = name),
    (this.color = color),
    (this.superpower = superpower),
    (this.isLeader = false);

  this.displayInfo = function () {
    console.log(`
    
    Powerpuff Girl Information:
    **************************
    Name: ${this.name}
    Color: ${this.color}
    SuperPower: ${this.superpower}
    ${this.isLeader ? 'Leader: 💪' : 'Leader: ❌'}
    
    `);
  };

  this.becomeLeader = function () {
    this.isLeader = true;
    console.log(`${this.name} has become the leader of the Powerpuff Girls !
      `);
  };
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breat');
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strength');
const bubbles = new PowerpuffGirl('Buttercup', 'Blue', 'Flight');

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

blossom.becomeLeader();

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

// function superCampeones(name, team, position) {
//   (this.name = name),
//     (this.team = team),
//     (this.position = position),
//     (this.isCaptain = false);

//   this.displayInfo = function () {
//     console.log(`Información Jugador de Super Campeones:
//       Nombre: ${this.name}
//       Equipo: ${this.team}
//       Posición: ${this.position}
//       ${this.isCaptain ? 'Es Capitán' : 'No es Capitán'}
//       `);
//   };

//   this.becomeCaptain = function () {
//     this.isCaptain = true;
//     console.log(`${this.name} es capitán del equipo ${this.team}`);
//   };
// }

// const oliver = new superCampeones(
//   'Oliver Atom',
//   'Niupi',
//   'Volante Creativo - Delantero'
// );
// const benjiPrice = new superCampeones('Benji Price', 'San Francis', 'Arquero');
// const bruceHarper = new superCampeones('Bruce Harper', 'Niupi', 'Defensa');
// const tomMisaki = new superCampeones('Tom Misaki', 'Niupi', 'Volante');
// const steveHyuga = new superCampeones(
//   'Steve Hyuga',
//   'Franco Canadiense',
//   'Delantero'
// );
// const andyJohnson = new superCampeones(
//   'Andy Johnson',
//   'Colegio Alemán',
//   'Delantero'
// );

// oliver.becomeCaptain();
// oliver.displayInfo();
// benjiPrice.becomeCaptain();
// benjiPrice.displayInfo();
// bruceHarper.displayInfo();
// tomMisaki.displayInfo();
// steveHyuga.becomeCaptain();
// steveHyuga.displayInfo();
// andyJohnson.becomeCaptain();
// andyJohnson.displayInfo();
