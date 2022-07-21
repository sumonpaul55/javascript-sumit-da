function validation() {
  let inputobj = document.getElementById("inputid");
  let output = document.getElementById("output");
  if (!inputobj.validation) {
    output.innerHTML = `You enter ${inputobj.value} this ${inputobj.validationMessage}`;
  } else {
    output.innerText = `You enter ${inputobj.value}`;
  }
}
