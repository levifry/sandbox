class Watch {
  constructor(brand, value, movement) {
    this.brand = brand;
    this.value = value;
    this.movement = movement;
  }
}
class LuxuryWatch extends Watch {
  constructor(brand, value, movement, materials) {
    super(brand, value, movement);
    this.materials = materials;
  }
}
class SmartWatch extends Watch {
  constructor(brand, value, movement, operatingSystem) {
    super(brand, value, movement);
    this.operatingSystem = operatingSystem;
  }
}
function findMostExpensiveWatch(watches) {
  let mostExp = watches[0];

  for (let i = 1; i < watches.length; i++) {
    if (watches[i].value > mostExp.value) {
      mostExp = watches[i];
    }
  }

  return mostExp;
}

const watch1 = new SmartWatch('Apple', 500, 'digital', 'watchOS');
const watch2 = new SmartWatch('Samsung', 450, 'digital', 'wearOS');
const watch3 = new LuxuryWatch('Rolex', 25000, 'automatic', ['white gold','platinum'])
const watch4 = new LuxuryWatch('Audemars Piguet', 40000, 'automatic', ['platinum', 'diamonds'])
const watches = [watch1, watch2, watch3, watch4]

console.log(findMostExpensiveWatch(watches))