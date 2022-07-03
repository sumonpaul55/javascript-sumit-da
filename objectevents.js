// const myObj = {
//   name: "sumon",
//   age: 25,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// let x = "";
// let carmodel = "";
// let content = document.querySelector("#sumon");
// for (let i in myObj.cars) {
//   x += myObj.cars[i].name;
//   for (let model in myObj.cars[i].models) {
//     carmodel += model[i];
//     let mitem = document.createElement("li");
//     mitem.innerText(carmodel);
//     content.appendChild(mitem);
//   }
//   let item = document.createElement("h2");
//   item.innerText = x;
//   content.appendChild(item);
// }
let x = "bangladesh";
console.dir(x.toLocals);
