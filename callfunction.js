const person = {
  fullName: function (city, county) {
    return this.firstName + " " + this.lastName + " " + city + county;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
let call = person.fullName.call(person2, "dhaka", "Bangladesh");

console.log(call);
