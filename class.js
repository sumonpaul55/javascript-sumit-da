class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  run(speed) {
    console.log(`${this.name} is runnig and speed is ${speed}`); //here this.name is bmw which is created bye new keywords
  }
}
const bmw = new car("BMW", 2012);
const audi = new car("audi", 2012);

audi.run("300 km per hour");
// The syntax in classes must be written in "strict mode".

// You will get an error if you do not follow the "strict mode" rules.

// Example
// In "strict mode" you will get an error if you use a variable without declaring it:
