const Truck = require('./Truck.js');
const Car = require('./Cars.js');
const Tesla = require('./Tesla.js');

const truck = new Truck(1);
const pokey = new Car(0.5);
const speedy = new Car(3);
const typeSPlaid = new Tesla(5);
// actions
pokey.addFuel(5)
pokey.move()
pokey.move()
pokey.move()

truck.addFuel(3)
truck.move()
truck.move()
truck.move()
truck.haulCargo('Zach');

speedy.addFuel(6)
speedy.move()
speedy.move()
speedy.move()

// typeSPlaid.addFuel(2000)
// typeSPlaid.move()
// typeSPlaid.move()
// typeSPlaid.move()

// console.log
console.log(`Pokey traveled ${pokey.distance} miles. ${pokey.fuelLevel} gallon(s) of fuel remaining.`)

console.log(`Truck traveled ${truck.distance} miles. ${truck.fuelLevel} gallon(s) of fuel remaining. With ${truck.cargo} as cargo.`)

console.log(`Speedy traveled ${speedy.distance} miles. ${speedy.fuelLevel} gallon(s) of fuel remaining.`)

// console.log(`TeslaSPlaid traveled ${typeSPlaid.distance} miles. ${typeSPlaid.fuelLevel} % of charge remaining.`)

console.log(`Tesla private method direct access: ${typeSPlaid?.private}`)
console.log(`Tesla private method direct access: ${typeSPlaid.shhh}`)
