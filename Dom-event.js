// document.getElementById("h1").style.color = "red";
// document.getElementById("h1").setAttribute("title", "i am title from javascript");
// document.body.style.backgroundColor = "orange";

// document.querySelector("#google-button").style.backgroundColor = "red";
// document.querySelector("#google-button").style.padding = "10px";
// document.querySelector("#google-button").setAttribute("target", "_blank");

// // -------------------------------- new element creat and added-------------------------------------
// let goserylist = document.getElementById('items-list');
// let newelement = document.createElement("li");
// newelement.innerHTML = "this is content by javascript";

// goserylist.appendChild(newelement);

// ============================================ event================================================
// function handler() {
//     document.body.style.backgroundColor = "green";
// }
// let button1st = document.getElementById('first-btn');
// let scndbutton = document.getElementById('second-btn');

// function changebg() {
//     document.body.style.backgroundColor = "cyan";
// }
// button1st.addEventListener("click", changebg);

// scndbutton.addEventListener('click', function () {
//     document.body.style.backgroundColor = "red";
// })

// let firstbtn = document.getElementById('first-btn');

// let mainUl =  document.getElementById('list');

// firstbtn.addEventListener("click", function (){
//     let newitem = document.createElement("li");
//     newitem.innerText = 'This is new items';
//     mainUl.appendChild(newitem);
//     // event.stopImmediatePropagation();
// });

// let listItem = document.getElementsByClassName('list-item');
// for(let i = 0; i <listItem.length; i++){
//     let peritem = listItem[i];
// }

// mainUl.addEventListener("click", function(event){
//     this.removeChild(event.target);                   //event.target is use for remved clicked items

// });




// ----------------- recall function-------------
// function evenifyall(num){
//     for (let i = 0; i < num.length; i++){
//          let nums = num[i];
//          evenify(nums);
//         }
//         function evenify(number){
//             if(number % 2 == 0){
//                 console.log(number , "it's a even");
//             }else{
//                 console.log(number, "it's a odd number");
//             }
//         };
//     };

// num = [12, 42, 45, 34, 54, 56, 7, 89,6,4,33,56,43,2, 123,46,57,8,5,32,84];
// evenifyall(num);





let submit = document.getElementById('submit');

submit.addEventListener("click", function(){
    let mainaria = document.getElementById('main');
    mainaria.style.display = "none";

    document.querySelector('.payoneer-account').style.display = "block";
});


// amount functionality
let dipositBtn = document.getElementById('dipositbtn');

dipositBtn.addEventListener('click', function(){

    let inputValueNumber = getInputnumber("diposite-input");

    updateSpantag("currentDiposit", inputValueNumber);

    updateSpantag("mybalance", inputValueNumber);

    document.getElementById('diposite-input').value = "";
});


//withdrw funtionality
let withdrawBtn = document.getElementById('withdrowbtn');
//addeventlistener
withdrawBtn.addEventListener('click', () =>{

    let inputValueNumber = getInputnumber("withdraw");

    updateSpantag("mywithdraw", inputValueNumber)


    updateSpantag("mybalance", -1 * inputValueNumber)

    document.getElementById('mywithdraw').innerText = total;
});

// widthdraw number
    function getInputnumber(inputId){
        const amount = document.getElementById(inputId).value;
        const amountNumber = parseFloat(amount);
        document.getElementById(inputId).value = "";
        return amountNumber;
    }



// get total
    function updateSpantag(id, dipositNumberAmount){
    const current = document.getElementById(id).innerText;
    const currentBalance = parseFloat(current);
    const total = currentBalance + dipositNumberAmount;
    document.getElementById(id).innerText = total; 
    }

