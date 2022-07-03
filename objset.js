const letters = new Set();
letters.add("a");
letters.add("b");
// letters.add("sumon paul");
letters.add("c");
let va = "sumon";
letters.add(va);
let other = "Something";
letters.add(other);
console.log(letters);

const letterIteretor = letters.values();

for (let i of letterIteretor) {
  console.log(i);
}
