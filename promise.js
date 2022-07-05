// const somthing = false;

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (somthing) {
//       resolve("task completed");
//     } else {
//       reject("failed");
//     }
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(`${err} is the custom error`);
//   });

const paymentsuccess = true;
let mark = 60;

function enroll() {
  //here nextstep is a callback function
  console.log(`course enroll is in progress`);
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (paymentsuccess) {
        resolve();
      } else {
        reject(`payment faild`);
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log(`course is in progress`);
  const promise = new Promise(function (resolve, rejcet) {
    setTimeout(() => {
      if (mark >= 80) {
        resolve();
      } else {
        rejcet(`You could not get enough marks to get a cirtificate`);
      }
    }, 3000);
  });
  return promise;
}

function getcirtificate() {
  console.log(`Prepareing your cirtificate`);
  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`Congrat's You got the cirtificate`);
    }, 1000);
  });
  return promise;
}

enroll()
  .then(progress)
  .then(getcirtificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
