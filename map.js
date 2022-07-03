const person = {
  fname: "sumon",
  lname: "paul",
};

person.age = 25;
// console.log(person);
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("oranges", 200);
fruits.set("bananas", 300);
fruits.set("litchi", 2000);

fruits.set("litchi", 100);
console.log(fruits);
fruits.clear();
console.log(fruits);
