// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// person.name = function () {
//   return (this.firstName + " " + this.lastName).toUpperCase();
// };

// // console.log(person.name);
// const objarry = Object.values(person);

// for (let x of objarry) {
//   console.log(x);
// // }
// let output = JSON.stringify(person);
// // console.log(output);
// let date = {
//   date: new Date(),
// };
// let sdtate = JSON.stringify(date);
// console.log(sdtate);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName);
console.log(person);
document.write(person);
