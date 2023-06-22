const container = document.querySelector(".container");
const careers = ["Mechanical Engineer", "Front-end Web Developer", "Programmer"];
// const careers = ["Creativity is intelligence having fun ~ Albert Einstein"];


let cindex = 0;
let chindex = 0;

updText();
function updText() {
  chindex++;
  container.innerHTML = `<h1>I am a ${careers[cindex].slice(0,chindex + 1)}</h1>`;

  if (chindex === careers[cindex].length) {
    cindex++;
    chindex = 0;
  }
  if(cindex === careers.length){
    cindex = 0;
  }
  setTimeout(updText, 200);
}
