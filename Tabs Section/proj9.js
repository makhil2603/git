const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button")
const conts = document.querySelectorAll(".content");
tabs.addEventListener('click',(event)=>{
     
    const id = event.target.dataset.id;
    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove("live")
            
    });
    event.target.classList.add("live");
    conts.forEach((cont)=>{
        cont.classList.remove("live");
    });
    const ele = document.getElementById(id);
    ele.classList.add("live");
    
    }
})