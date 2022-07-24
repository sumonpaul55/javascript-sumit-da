function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what to do when response arrived
  xhr.onload = function () {
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
  };
  //prepare requerst - methods = GET, POST, PUT, DELETE, PATCH, OPTIONS

  xhr.open("GET", "data/data.txt");
  //send request
  xhr.send();
}
