const kits = ["Snare","Kick","Crash","Tom"];
const container = document.querySelector(".container");
kits.forEach((item) =>{
    const btn = document.createElement("button");
    btn.classList.add("btn");
    container.appendChild(btn);
    btn.innerText = item;
    const audioEle = document.createElement("audio");
    container.appendChild(audioEle);
    audioEle.src = "sounds/" + item.toLowerCase() + ".mp3";
    btn.style.backgroundImage = "url(" + "images/" + item.toLowerCase() + ".png" +  ")";
    btn.addEventListener('click',()=>{
            audioEle.play();
    })
    window.addEventListener('keydown',(event)=>{
        if(event.key == item.slice(0,1).toLowerCase()){
            audioEle.play();
            btn.style.transform = "scale(0.9)";
            setTimeout(()=>{
                btn.style.transform = "scale(1)";
            },100)
        }
    })

})