function myMove() {
  const animate = document.querySelector("#animate");
  let position = 0;
  const intervel = setInterval(frame, 5);
  function frame() {
    position++;
    if (position < 450) {
      animate.style.top = position + "px";
      animate.style.left = position + "px";
    } else {
      clearInterval(intervel);
    }
    console.log(position);
  }
}

function clickBtn() {
  myMove();
}
