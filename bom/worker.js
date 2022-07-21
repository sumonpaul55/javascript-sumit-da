let w;

function startworker() {
  if (typeof Worker !== "undefined") {
    //Worker availabe
    if (typeof w == "undefined") {
      w = new Worker("workerfile.js");
    }
    //creat a new worker called w
    w.onmessage = function (event) {
      document.getElementById("demo").innerHTML = event.data;
    };
  } else {
    alert(`This browser is not support the web Worker`);
  }
}

function stopWorker() {
  if (typeof Worker !== "undefined") {
    w.terminate(); //It stops the Worker
    w = undefined;
  } else {
    alert(`This browser is not support the web Worker`);
  }
}
