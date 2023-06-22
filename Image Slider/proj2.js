const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const imagecontainer = document.querySelector(".img-container");
const images = document.querySelectorAll("img");

let cimg = 1;

next.addEventListener('click',()=>{
    cimg++;
    clearTimeout(timeout);
    upd();
});

previous.addEventListener('click',()=>{
    cimg--;
    clearTimeout(timeout); 
    upd();
    
})
upd();
function upd() {
    if(cimg > images.length){
        cimg = 1;
    }
    else if(cimg < 1){
        cimg = 5;
    }
    imagecontainer.style.transform = `translateX(-${(cimg-1)*500}px)`;
    timeout = setTimeout(()=>{
       cimg++;
       upd();
    },2000);
}


