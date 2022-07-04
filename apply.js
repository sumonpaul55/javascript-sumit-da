const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};
("use strict");
// This will return "Mary Doe":
console.log(person.fullName.apply(person1)); // we can pass a arry as peramitre
let numarry = [1, 2, 80, 59, 49, 38, 29];
let math = Math.max.apply(Math, numarry);
console.log(math);
