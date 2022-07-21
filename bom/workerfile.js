// here dom and browser window not available

let i = 0;
while (i < 100000000) {
  i++;
}
postMessage(i);
