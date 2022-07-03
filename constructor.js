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

console.log(sumon.fullname(), sourav.fullname());
