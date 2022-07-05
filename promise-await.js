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

async function course() {
  try {
    await enroll();
    await progress();
    const massege = await getcirtificate();
    console.log(massege);
  } catch (err) {
    console.log(err);
  }
}
course();
