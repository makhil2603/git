const textArea = document.getElementById("textarea");
const tcounter = document.getElementById("tcounter");
const rcounter = document.getElementById("rcounter");
const button = document.querySelector(".button");
let intro = "Welcome to Akhil's Mini Speaker! This project is developed using Html,Css and Jaavascript. Start writing here in the dialog Box.";
let utter1 = new SpeechSynthesisUtterance(intro);
speechSynthesis.speak(utter1);
textArea.addEventListener('keyup',()=>{
    console.log("Key is pressed!")
    updateCounter();
})
function updateCounter(){
    tcounter.innerText = textArea.value.length;
    rcounter.innerText = textArea.getAttribute("maxlength") - textArea.value.length ;
    if(rcounter.innerText == "0"){
        // alert("You have reached the maximum number of words.");
        let utterance = new SpeechSynthesisUtterance("You have reached the maximum number of words!");
        speechSynthesis.speak(utterance);
        
    }
    
}

button.addEventListener('click',()=>{
    let utter2 = new SpeechSynthesisUtterance(textArea.value);
    speechSynthesis.speak(utter2);
})

updateCounter();
