class Building {
    #numberOfFloors;
    #yearLastInspected;
    constructor(numberOfFloors, yearLastInspected) {
      this.#numberOfFloors = numberOfFloors;
      this.#yearLastInspected = yearLastInspected;
    }
  
    get numberOfFloors() {
      return this.#numberOfFloors;
    }
  
    get yearLastInspected() {
      return this.#yearLastInspected;
    }
  
    set yearLastInspected(newValue) {
      this.#yearLastInspected = newValue;
    }
  
    addFloor() {
      this.#numberOfFloors += 1;
    }
  
    needsInspection() {
      return new Date().getFullYear() - this.#yearLastInspected > 10;
    }
  }
  
  const empireState = new Building(102, 2014);  // 102 floors inspected in 2014
  console.log(empireState.numberOfFloors);       // 102
  console.log(empireState.yearLastInspected);    // 2014
  empireState.yearLastInspected = 2016;
  console.log(empireState.yearLastInspected); // 2016