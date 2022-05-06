class Computer {
  constructor(cpu){
      this.cpu = cpu,
      this.drives = []
  };
  addStorage(drive) {
      this.drives.push(drive)
  }
  reformat() {
      this.drives.forEach(drive => {
        drive.data = [];
        drive.spaceRemaining = drive.maxSpace;
      });
    }
};

class Processor {
  constructor(brand, model, power) {
      this.brand = brand
      this.model = model,
      this.power = power
  };
  listSpecs() {
      return `The ${this.brand} ${this.model} produces ${this.power} gHz of processing power.`
  };
};

class Drive {
  constructor(type, maxSpace) {
      this.type = type,
      this.maxSpace = maxSpace,
      this.spaceRemaining = maxSpace,
      this.data = []
  };
  write(newData) {
      this.data.push(newData)
      this.spaceRemaining -= newData.size
  };
  wipe() {
      this.data = []
      this.spaceRemaining = this.maxSpace
  }
};

console.log('So you want a new MacBook Air? Ok...')
  sleep(1000)
console.log('Setting up CPU:')
  const cpu = new Processor('Apple','M1 Chip',3.2)
  sleep(2000)
console.log(cpu.listSpecs())
  sleep(2000)
console.log('Generating computer object:')
  const mac = new Computer(cpu)
  sleep(1000)
console.log(mac)
  sleep(3000)
console.log('Adding hard drives to Mac:')
  const drive1 = new Drive('HDD', 100000000)
  const drive2 = new Drive('SSD', 800000)
  const drive3 = new Drive('USB Stick', 20000)
  mac.addStorage(drive1)
  mac.addStorage(drive2)
  mac.addStorage(drive3)
  sleep(1000)
console.log(mac)
  sleep(4000)
console.log('Writing data to the hard drives.')
  const packet1 = {
    size: 60500, //bytes
    content: 'Some arbitrary data'
  };
  const packet2 = {
    size: 230012, //bytes
    content: 'A lot of arbitrary data'
  };
  const packet3 = {
    size: 500, //bytes
    content: 'A tiny amount of arbitrary data'
  };
  drive1.write(packet1)
  drive2.write(packet2)
  drive3.write(packet3)
  sleep(1000)
console.log(mac)
  sleep(4000)
console.log(`Wiping the USB Stick, it's useless anyways:`)
  drive3.wipe()
  sleep(1000)
console.log(mac)
  sleep(4000)
console.log('New Mac released, reformatting this one to send it back in:')
  mac.reformat()
  sleep(1000)
console.log(mac)
  sleep(4000)
console.log('Wow, what a journey. Time to call it a day.')

function sleep(ms) {
  var currentTime = new Date().getTime();
  while (currentTime + ms >= new Date().getTime()) {
  }
}