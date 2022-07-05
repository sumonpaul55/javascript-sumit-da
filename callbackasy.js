const paymentsuccess = true;
let mark = 90;

function enroll(nextstep) {
  //here nextstep is a callback function
  console.log(`course enroll is in progress`);
  setTimeout(() => {
    if (paymentsuccess) {
      nextstep();
    } else {
      console.log(`payment faild`);
    }
  }, 2000);
}
function progress(nextstep) {
  console.log(`course is in progress`);
  setTimeout(() => {
    if (mark >= 80) {
      nextstep();
    } else {
      console.log(`You could not get enough marks to get a cirtificate`);
    }
  }, 3000);
}
function getcirtificate() {
  console.log(`Prepareing your cirtificate`);
  setTimeout(() => {
    console.log(`Congrat's You got the cirtificate`);
  }, 1000);
}
enroll(function () {
  progress(getcirtificate);
});
