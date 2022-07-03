const person = {
    name: "sumon",
    age : 25
};

// person.name = "someone" //immutable //changed this is muted

// console.log(person);
// let num = 5;
// num = 3; //changed mutable
// it is a commot practice to declear objects with const keyword.

person.country = "bangladesh";//add a property with value
person.age = 50;// change property's value

// console.log(person)// we can call any object another way
// console.log(person["age"]);// should be write the object property name like string inside the third bracket;
let a = "age";
// console.log(person[a]);// call a object with dynamic property

delete person.age; //delete any object property and value *// delete keyword uses only obect
// console.log(person)

//--------------------------------------------- Nested Objects----------------------------------
const myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",// nested object one more object inside the object's property
      car2:"BMW",
      car3:"Fiat"
    }
  }
//   console.log(myObj.cars);
  //we can print with arry syntax
//   console.log(myObj["cars"]["car3"])// arrysyntax without .

  //-------------------------------------------------------------Nested Arrays and Objects-----------------------
  const myObj1 = {
    name: "John",
    age: 30,
    cars: [ //-- inside an object's property included an arry
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  //To access arrays inside arrays, use a for-in loop for each array:

//   for (let i in myObj1.cars) { // if we use for in loop in an arry it will return index number instead value
//     console.log(i)
//     }
let x = "";
for (let i in myObj1.cars) {
    x += "<h1>" + myObj1.cars[i].name + "</h1>";
    for (let j in myObj1.cars[i].models) {
      x += myObj1.cars[i].models[j];
    }
  }
