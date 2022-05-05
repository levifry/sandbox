class VendingMachine {
  constructor(){
      this.snacks = [];
      this.money = 0;
  };
  addSnack(snack) {
      this.snacks.push(snack);
  };
  buySnack(snack) {
      this.money += snack.price;
      this.snacks.filter((snackItem) => ( // filters out all snacks that don't equal the input
          snackItem.name !== snack.name
      ))
  };
};

const machine = new VendingMachine();
machine.addSnack({name: 'Chocolate Bar', price: 2.5});
machine.addSnack({name: 'Potato Chips', price: 1.5});
machine.buySnack({name: 'Potato Chips', price: 1.5});

console.log(machine)
