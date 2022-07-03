// const person = {
//   fname: "sumon",
//   lname: "paul",
//   age: 22,
// };

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullname = function () {
    return this.firstName + " " + this.lastName;
  };
}
const sumon = new Person("sumon", "Paul", 25);
const sourav = new Person("Sourav", "Paul", 22);
//sumon.country = "Bangladesh"; // we can reassign property and value from a constractor function
// console.log(sumon.fullname(), sourav.fullname());

Person.prototype.country = "India"; // prototype add a property in the main object as defaulte property
console.log(sourav.country); //we can access with call
