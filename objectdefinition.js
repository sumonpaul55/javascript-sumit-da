let person = {
  age: 25,
  name: "Sumon ",
  lastName: "Paul",
  getname: function ektakichu() {
    return this.name + this.lastName;
  },
};
let person2;
person2 = person; //we cannot change the main object both will same object
// person.name = "Someone else";
// console.log(person.name);
person.sumon = "I love you ";
person.someone = "Pranesh da";
person.someone = "onno kew";
// console.log(person.sumon);
// let fullname = person.getname();
// console.log(fullname);
// console.log();

// for in through the object
const objname = {
  fname: "sumon",
  mname: " chandra",
  lname: " paul ",
  age: 25,
};

let txt = "";
for (let x in objname) {
  //   console.log(x); //access property
  console.log(objname[x]);
  txt += objname[x];
}
console.log(txt);
