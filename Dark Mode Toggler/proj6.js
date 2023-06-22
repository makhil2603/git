const input = document.querySelector(".input");
const body = document.querySelector("body");


input.checked = JSON.parse(localStorage.getItem("mode"));

updBody();

function updBody(){
    if(input.checked){
       body.style.backgroundColor = "black";
    }
    else{
       body.style.backgroundColor = "white";
    }
}
input.addEventListener("input",()=>{
    updBody();
    updLocalStorage();
})

function updLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(input.checked));
}