// document.getElementById("h1").innerHTML= "hi this is live server";

// Function is called, return value will end up in x

// /* objecto */
// let x = "John";             
// let y = new String("Johns");

// let str = "I love you";

// let digit = "5";

// let sumon = `teplate literel    
// this is string this is back-trick`;

// console.log(sumon);

// let f = `bangladesh "vutan"`;

// console.log(f)

// let a = 20;
// let b = 1;
// let country = "Bangladesh";
// let sentance = `I love ${country} and again ${country} it's population is ${a+b} cores`

// console.log(sentance);

// let a = 6;
// let b = 8;
// document.getElementById("demo").innerHTML = a+b;
// let x = 9.5405;
// let ans = x.toFixed();
// console.log(ans);




// let fruits = ["Banana", "Orange", "Apple", "Mango" , "jackfruit"];
// fruits[3] = "sumon";
// console.log(fruits[3])
// console.log(fruits)




// let txt = "<ul>";
// fruits.forEach(myfunction); 
// txt += "</ul>";

// document.getElementById("demo").innerHTML = txt;



// function myfunction(value){
//     txt += "<li>" + value + "</li>"
// }

// let num = [12 , 43 ,24 ,54 ,3,5,4,2,5,2,4,4,55,33,65,43,21,67,8,9];
// num.split(", ");
// document.getElementById("demo").innerHTML = num;

// function alphabetic(){
//     num.sort();
//     document.getElementById("demo").innerHTML = num;
// }
// function neumeric(){
//     num.sort(function(a,b){
//         return a-b});
//     document.getElementById("demo").innerHTML = num ;
// }

// let points = [12,45,32,35,32,33,45,6,7,889,65,38];

// function myfunction(value){
//   return value<30;
// }

// const underten = points.filter(myfunction);
// console.log(underten);
// console.log(points)
// s = 5;
// console.log(s)

// console.log(points);
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let d = new Date();

// let Currentmonths = months[d.getMonth()];

// // console.log(Currentmonths);
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// console.log(today);
// console.log(someday



//                                                               random number games
// let pnumber = prompt("Enter your number =");
// parseInt(pnumber);
// console.log("You Entered ="+ pnumber);

// let rnumber = Math.floor(Math.random()*11);
// console.log("the rendom number is =" + rnumber);

// if(pnumber == rnumber){
//     console.log("You have won")
// }
// else{
//     console.log("You have lost")
// }




//============================== find the vowel


//     let vowels = ["a","e","i", "o", "u", "A","E","I", "O","U"];

//     function countvowel(sentence){
//         let vcounts = 0;
//         let letterss = Array.from(sentence);
//         letterss.forEach(function(value, index, Array){
//             if(vowels.includes(value)){
//                 vcounts++;
//             }
//         })
//         return vcounts;
//     }

//    console.log(countvowel("I Love Bangladesh"));


// let numbers = [1,2 ,3,4,6,222,4,3,6,4,33,25,43,21,11,22,1,2,4,6,7,5,4,3,2,1,3,56];
// console.log(numbers.length)
// let dublicate = numbers.filter(function(value,index, Array){
//     return Array.indexOf(value) === index;
// })

// console.log(dublicate)


// =========================================== votealbe works=========================================================

// function result(){
//     let uttor;
//     let age = Number(document.getElementById("age").value);
//     if(isNaN(age)){
//         uttor = "not a valid number";
//     }else{
//         uttor = (age >= 18) ? "old enough" : "not old enough";
//     }
//     document.getElementById('demo').innerHTML = uttor + " to vote";
// }


// ===========================================Find the vowel and consonant using Switch

// let letter = prompt("Enter a latter ");
// letter.toLocaleLowerCase();

// switch(letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     console.log("Your letter is Vowel");
//     break;
//     default:
//         console.log("You letter is Consonat")
// }


// const person = ["Sumon", "Paul", 25]

// for(let x in person){
//     console.log(person[x])
// }

// let i = 0;
// while(i < 10){
// console.log("the number is = "+i)
// i++
// }

// let text = "";
// let i = 0;

// do {
//   text += "The number is =" + i +" ";
//   i++;
// }
// while (i < 10);  

//   console.log(text);

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName())


// -----------------------------------------------------------------javascript Set

// let letters = new Set(["a", "b", "c","d"]);

// letters.add("y")
// console.log(letters);



// -----------------------------------------------------------------javascript maps
// Create a Map
// const mfruits = new Map([
//     ["apples", 500],        //here apples is key and 500 is value
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
// console.log(mfruits)
// console.log(mfruits.get("apples")); //call a spesific value
// console.log(mfruits.size); // find the size of map
// mfruits.delete("oranges");//remove any spesific key and values
// console.log(mfruits.has("apples")); //returns true if a key exists in a Map either false:
// //entries() can itarable  a map
// let txt = "";
// for(let x of mfruits.entries()){
//    txt += x;

// console.log(x)
// }


// Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// // console.log(fruits);

// function isArray(myArray) {
//     console.log(myArray.constructor.toString().indexOf("Array") > -1);
//   }

//   isArray([1,4,5,]);

// Unery operator
// let y = "5";      // y is a string
// let x = + y;      // x is a number

// // exponential
// console.log(!false)
// let num = "59";
// console.log(typeof parseInt(num))

//------------------------------------------------------------------------------ regular expression----------------------------------------
// let text = "Visit W3Schools!";
// let n = text.search("W3Schools");
// console.log(n) //it will return 6         because w is strated from 6 index number


// let text = "Visit W3Schools!";
// let n = text.replace("W3Schools" , "Sumon"); // we can use modifier "i" case-insensitive
// console.log(n) //it will return Visit Sumon         because w is strated from 6 index number


// let text = "Visit W3Schools wich is w3schools!";
// let n = text.replace(/w3Schools/ig , "Sumon"); // we can use modifier "i" case-insensitive and "g" global > global will replaced all words ins same line
// console.log(n) //it will return Visit Sumon         because w is strated from 6 index number

// //----------------------------------------------------------------throw and try catch and finally

// try{
//     aalert("Hello world")
// }catch(err){
//     console.log("can't find the adlert variable")
// }

// "use strict";
// x = 3.14; 

// console.log(x)

// -------------------------------------------------------- this ------------------------------------------------------------
// let bigname = "";

// let friend = ["Sumon chandra paul", "Jhumu rani", "someone else"];

// for(let x of friend){
//     console.log(x)
// }

// ------------------------------------------------------- explicit--------------------------------------

// const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName; //here this is person2 because of call(person2)
//     }
//   }

//   const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }

//   // Return "John Doe":
//   person1.fullName.call(person2);


// ------------------------------------------------------- js class--------------------------------------

// class j {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   play(status){ //we can pass a parameter also
//     console.log(`${this.age} her age ${status}`)
//   };
// }

// const person1 =new j("sumon", 23);// creat a actual object
// const person2 = new j("sourav", 20);// creat a actual object
// person2.play("well");//we should pass the value of parameter  

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("Ford", 2014);

// console.log("My car is " + myCar.age() + " years old.");

// let d = new Date();
// console.log(d.getFullYear());

// sumon = (x,y) =>{
//   console.log(x+y);
// } 

// sumon(5, 9)

// reg exp
// let text = "lorem impsum sumon  lorem paul lorem lorem sumon paul chandra chandra sole lorem ksi s Sumon dkjjf ipsumg";

// let matc = text.match(/sumo/ig);
// console.log(matc)
// let se = text.search(/sumon/i);
// console.log(se)

// ------------------------------------------ problem solving

//input linearsearch (["a", "b", "c", "d", "c"], ""c");
//output 2 or not found
//should linearsearch() funtion implement 

// function linearsearch(err, valu){
//   for(let i = 0; i < err.length; i++){
//     if(err[i] === valu){
//       return i;
//     }
//   }
//   return "not found";
// }

// console.log(linearsearch(["a", "b", "c", "d", "c"], "d"));

// -------------------- find the digit which is divided by 3 and 5 and 3 or 5;

// function fizbuz(number){
//     for(let i = 1; i <= number; i++){
//         if(i % 15 === 0){
//             console.log(`${i} this is fizbuz 3 and 5`);
//         }else if(i % 3 === 0){
//             console.log(`${i} this is fiz only 3`);
//         }else if(i % 5 === 0){
//             console.log(`${i} this is buz 5`)
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizbuz(100);


// ------------------------------------------------ find the truthy elements using filter [filter is function----------------
// const mixedarry = ["sumon paul", 4, undefined, null, 0, "", "some one", "lwis"];

//const result = mixedarry.filter(element);

// function element(elemetarry){
//     if(elemetarry){
//         return elemetarry;
//     }else{
//         return false;
//     }
// }
//or
// console.log(mixedarry.filter(Boolean));



// ------------------------------------------------ find the truthy elements from object using filter [filter is function----------------

// const myObject = {
//     a:"sumon",
//     b:"",
//     c:5,
//     e:"sumpaul",
//     f:0,
//     g:"Paul",
//     h:" ",
//     i: true,
//     j: false,  
//     k: NaN
// }
// function truthyobj(ob){
//     for(let i in ob){
//         if(!ob[i]){
//             delete ob[i];
//         }
//     }
//     return ob;
// }
// console.log(truthyobj(myObject));
// let str = "Please locate where 'locate' occurs!";
// let strs = str.lastIndexOf("l");
// console.log(strs)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// fruits.push("Sumon");
// fruits.shift();
// fruits.unshift("Jhumu")
// document.getElementById("demo").innerHTML = fruits.join(", ");
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(v , index) {
//   txt += index + "<br>";
//   document.getElementById("demo").innerHTML = txt;
// }
// let today = new Date();
// let day = today.getDay();
// document.getElementById("demo").innerHTML = day;
// let person = {
//     fname : "sumon",
//     lname : "paul",
//     age : 25
// }
// let text = "";
// for (let x in person){
//     text += person[x];
// }
// console.log(text)
// var number1 = 5.7;
// var number2 = 5.2;
// var total = number1 + number2;
// total = Math.floor(total)
// console.log(total)

// let jobpaiso = false;
// let savings = 200000;
// if(jobpaiso == true || savings <= 200000){
//     console.log("it's time to get merry")
// }else{
//     console.log("it's not time to get merry")
// }

// -------------------------------- slice and splice----------------------------
// let friends = ["samal", "balam", "sumon", "kamal", "domi", "binna", "other", "mnika"];
// let part = friends.splice(2, 4, "prionka");

// let num = 1;
// while(num<= 10){
//     console.log(num);
//     num = num+1;
// }

// let frnd = ["rajon", "ripon", "sujon", "shuvo", "shawn"];
// for(let i = 0; i < frnd.length; i++){
//     console.log(frnd[i])
// }

// let inch = 256;
// let feet = inch/12;
// console.log(feet);


// let Name = "sumon paul";
// if (Name.length > 5){
//     Name = "Sumon"; 
// }
// console.log(Name);
// -------------------------------------------------- fibonacci------------------------------------------------------
// let fibo = [0,1];
// for(let i = 2; i <= 10; i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
//     // console.log(fibo[i], fibo[i-1], fibo[i-2]);
// }
// function fibonacci(n){
//     for(let i = 2; i <= n; i++){
//        fibo[i] = fibo[i-1]+fibo[i-2]; 
//     }
//     return fibo;
// }
// let result = fibonacci(12);
// console.log(result)
// function fibonacci(n){
//     if(n == 0){
//         return 0;
//     }
//     else if(n == 1){
//         return 1;
//     }
//     else {
//         return fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }
// let result = fibonacci(6);
// console.log(result)
// function fibonacci(n){
//     if(n == 0){
//         return [0];
//     }
//     else if(n == 1){
//         return [0, 1]
//     }
//     else{
//         let fibo = fibonacci(n - 1);
//         let secondelemtnt = fibo[n - 1] + fibo[n - 2];
//         fibo.push(secondelemtnt);
//         return fibo;
//     }
// }
// let result = fibonacci(15);
// console.log(result);
// ----------------------------------------------------------fibonacci end----------------------------------------------
// let mynumber = [32,48,29,9,38,39,29,47,67,8,8];
// let maxnum = mynumber[0];

// for(let i = 0; i <= mynumber.length; i++){
//    let element = mynumber[i];
//    if(maxnum < element){
//       maxnum = element;
//    }
// }
// console.log(`the big number is: ${maxnum}`);

// -------------------------------------------find the duplicate number --------------------------
// 
// // console.log(uniqstudentId);
// let spech = "I live in Bangladesh it's is a beautiful            country";
// for (let i = 0; i < spech.length; i++){
//       let newspech = spech[i];
//       if(newspech == " " && spech[i-1] != " "){
//          // console.log(newspech.length);
//       }
//    }
// ---------------------------------------------------- reverse srting---------------------------------------


//  function myfunction(str){
//     let reverseis = "";//it have to use same name without "let or var" inside the blockcode
//     for(let i = 0; i < str.length; i++){
//     let wordis = str[i];
//       reverseis = wordis + reverseis;
//     }
//     return reverseis;
//    }

//  let statement = "I live in Bangladesh it's is a beautiful country";
//  let output = myfunction(statement);
//  console.log(output);
// ------------------------------------------------------- swaping -------------------------------------------------------------------
// let a = 10;
// let b = 39;

// console.log("before swaping a =",a ,"b =" ,b);

// let tepm = a;
// a = b;

// b = tepm;
// console.log("after swaping a =",a ,"b =" ,b);

// let x = 5;
// let y = 2;

// x = x + y;
// y = x - y;
// x = x - y;
// console.log("after swaping x =", x, "y =", y)
// -------------------------------------------------calculate of feet to mile
// function feetTomile(feet) {
//     let mile = feet / 5280;
//     return mile;
// }
// let result = feetTomile(184800);
// // console.log(result)
// // ----------------------------------------- calculate wood
// function woodCalculator(chair, table, khat) {
//     let woodChair = chair * 1;
//     let woodTable = table * 3;
//     let woodkhat = khat * 5;
//     return woodChair + woodTable + woodkhat;
// }

// let myNeed = woodCalculator(5, 15, 2);
// // console.log("you need total ",myNeed , "Cubik feet wood");


// // ----------------------------------------- Bricks calcutor

// function brickCalculator(amountofFloor) {
//     if (amountofFloor <= 10) {
//         let bricks = amountofFloor * 15 * 1000;
//         return bricks;
//     }
//     else if (amountofFloor > 10 && amountofFloor <= 20) {
//         bricks = (10 * 15000) + (amountofFloor - 10) * 12000;
//         return bricks;
//     }
//     else if (amountofFloor > 10 && amountofFloor > 20) {
//         bricks = (10 * 15000) + (10 * 12000) + (amountofFloor - 20) * 10000;
//         return bricks;
//     }
// }
// console.log(brickCalculator(7));

// // ---------------------------------------- tiny friends --------------------------------------------


// function factorial(num){
//     let fact = 1;
//     for(let i = 1; i <= num; i++){
//         fact = fact * i;
//         console.log(fact);
//     }
//     return fact;
// }
// console.log(factorial(5));

// --------------------------------------------------factorial -----recursive way-----------------------------------------
// function factorialrecursive(num){
//     if(num == 1){
//         console.log(num)
//         return 1;
//     }
//     else{
//         console.log(num, num-1)
//         return num * factorialrecursive(num -1);
   
//     }
// }
// let result= factorialrecursive(5);
// console.log(result);

// function myfunction(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         let element = arguments[i];  
//         sum += element;
//         }
//         return sum;
//     }
// let result = myfunction(1,4,5,10);
// console.log(result);

// let friends = ["sourav", "sumonpaul", "gobindo","sujonrobidas", "suvoroy", "Other"];

    
//     let shortNamefriend = [];

//     friends.forEach(element => {
        
//         if (element.length > shortNamefriend.length){
//             shortNamefriend.push(element)
//         }
        
//     }

// );
// console.log(shortNamefriend)




















































