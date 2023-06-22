const container = document.querySelector(".container");
let scien = "Albert Einstein";
let quote = "Creativity is intelligence having fun.";

let qindex = 0;

updText();
function updText() {
  qindex++;
  if (qindex >= quote.length) {
    container.innerHTML += `<h1>${scien.slice(0, qindex-quote.length+1)}</h1>`;
    if (qindex === quote.length+scien.length) qindex = 0;
  }
//   if (qindex > quote.length) {
//     container.innerHTML += `<br>`;
//   }
  let x = `${quote.slice(0, qindex + 1)}`;
  container.innerHTML = `<h1>${x}</h1>`;
  setTimeout(updText, 200);
}
