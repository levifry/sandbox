class Car {
    #make
    constructor(model, horsepower, value, make) {
        this.#make = make;
        this.model = model;
        this.horsepower = horsepower;
        this.value = value;
    };
    get carMake() {
        return this.#make
    }
    set carMake(newValue) {
        this.#make = newValue;
    }
    listSpecs() {
        return `The ${this.make} ${this.model} generates ${this.horsepower} BHP and costs $${this.value}.`
    };
};

const racer = new Car('fusion', 6000, '59,000')
racer.carMake = 'lambo'
console.log(racer.carMake)
console.log(racer)