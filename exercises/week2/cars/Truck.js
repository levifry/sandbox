const Car = require('./Cars.js');

class Tesla extends Car {
    #private
    constructor(speed, fuelMax= 100, fuelEfficiency = 3, chargeEfficiency = 10, fuelLevel = 75) {
        super(speed, fuelMax, fuelEfficiency);
        this.chargeEfficiency = chargeEfficiency;
        this.fuelLevel = fuelLevel;
        this.#private = 'Shhhhh!!!!!!'
    }

    addFuel(time) {
        if (time <= 0 || this.fuelLevel === this.fuelMax) return;
        console.log(`Charging your Tesla for ${time} minutes.`);
        setTimeout(() => {
            super.addFuel(1)
            this.addFuel(time - this.chargeEfficiency)
            console.log(`Charging: ${this.fuelLevel}%`)
        }, this.chargeEfficiency)
    }

    get shhh() {return this.#private}
    
}

module.exports = Tesla;