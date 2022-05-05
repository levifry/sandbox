class Car {
    constructor() {
        this.fuel = 0;
        this.distance = 0;
    }


    // Notice here the `move()` method is defined without "prototype chaining", unlike the previous example.
    move() {
        if(this.fuel < 1) {
            throw new RangeError("Fuel tank is depleted")
        }
        this.fuel--
        this.distance += 1
    }
    // `addFuel` also without "prototypal chaining"
    addFuel() {
        if(this.fuel >= 60) {
            throw new RangeError("Fuel tank is full")
        }
        this.fuel++
        this.distance = 0;
    }
}
class Prius extends Car {
    move() {
        super.move()
        this.distance += 6
    }
}

class Truck extends Car {
    move() {
        super.move()
        this.distance += 1
    }
}

var truck = new Truck();
var car = new Prius();
// actions
car.addFuel()
car.addFuel()
car.addFuel()
car.move()
car.move()
car.move()

truck.addFuel()
truck.addFuel()
truck.addFuel()
truck.move()
truck.move()
truck.move()

// console.log
console.log(`Prius traveled ${car.distance} miles. ${car.fuel} gallon(s) of fuel remaining.`)

console.log(`Truck traveled ${truck.distance} miles. ${truck.fuel} gallon(s) of fuel remaining.`)