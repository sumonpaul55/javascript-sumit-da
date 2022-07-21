// let width = document.getElementById("width");
// let height = document.getElementById("height");
// let availwidth = document.getElementById("availwidth");
// let availheight = document.getElementById("availheight");
// let colordepth = document.getElementById("colordepth");
// let pixeldepth = document.getElementById("pixeldepth");

// width.innerHTML = `screen width is =${window.screen.width}`;
// height.innerHTML = `screen height is =${window.screen.height}`;
// availwidth.innerHTML = `screen availwidth is =${window.screen.availWidth}`;
// availheight.innerHTML = `screen availheight is =${window.screen.availHeight}`;
// colordepth.innerHTML = `screen colordepth is =${window.screen.colorDepth}`;
// pixeldepth.innerHTML = `screen pixeldepth is =${window.screen.pixelDepth}`;

let watch = document.getElementById("watch");
setInterval(() => {
  let d = new Date().toLocaleString();
  watch.innerHTML = d;
}, 1000);
