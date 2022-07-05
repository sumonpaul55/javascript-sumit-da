// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

class mCar {
  constructor(brand) {
    this.carname = brand;
  }
  parent() {
    return `I have a ${this.carname}`;
  }
}

class mmodel extends mCar {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return `${this.parent()} it is ${this.model}`;
  }
}

let acar = new mmodel("Xcorrola", "Jodrun");

console.log(acar.show());
