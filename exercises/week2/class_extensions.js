class Car {
    constructor(make, model, horsepower, value) {
        this.make = make;
        this.model = model;
        this.horsepower = horsepower;
        this.value = value;
    };
    set carMake(newValue) {
        this.make = newValue;
    }
    depreciate() {
        this.value *= 0.75;
        return this.value;
    };
    listSpecs() {
        return `The ${this.make} ${this.model} generates ${this.horsepower} BHP and costs $${this.value}.`
    };
};
  
class SportsCar extends Car {
    constructor(make, model, horsepower, value, acceleration) {
        super(make, model, horsepower, value);
        this.acceleration = acceleration;
    };
    listSpecs() {
        return `The ${this.make} ${this.model} generates ${this.horsepower} BHP, accelerates from 0-60 MPH in ${this.acceleration} seconds, and costs $${this.value}.`
    };
};

let racer = new Car('ford', 'fusion', 6000, '59,000', 2.9)
console.log(racer.listSpecs())