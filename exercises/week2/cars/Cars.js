// Exercise on Learn - Clases Introduction
// Creating a Car

class Car {
    constructor(speed = 2, fuelMax= 15, fuelEfficiency = 23) {
        this.distance = 0;
        this.fuelLevel = 0;
        this.fuelMax = fuelMax;
        this.fuelEfficiency = fuelEfficiency;
        this.speed = speed;
    }

    consumeFuel(distanceTraveled) {
        let fuelConsumed = distanceTraveled / this.fuelEfficiency;
        const canMove = this.fuelLevel >= fuelConsumed;
        if (canMove) return this.removeFuel(fuelConsumed);
        return -1;
    }

    removeFuel(amount = 0) {
        this.fuelLevel = Math.max((this.fuelLevel - amount), 0);
        return this.fuelLevel;
    }


    // Notice here the `move()` method is defined without "prototype chaining", unlike the previous example.
    move() {
        if (this.consumeFuel(this.speed) >= 0) {
            this.distance += this.speed
        } else {
            console.log('Not enough Fuel try slowing down.');
        }
        
    }
    // `addFuel` also without "prototypal chaining"
    addFuel(amount = 1) {
        this.fuelLevel = Math.min((this.fuelLevel + amount), this.fuelMax);
        return this.fuelLevel;
    }
}

module.exports = Car;
