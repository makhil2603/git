const wkeys = document.querySelectorAll(".w-key");
const bkeys = document.querySelectorAll(".b-key");

// Speech Synthesis
let welcome = "Welcome to Piano! This project is developed using HTML,CSS and JAAVASCRIPT. Start the Music";
let utterance = new SpeechSynthesisUtterance(welcome);
speechSynthesis.speak(utterance);


bkeys.forEach((b, i) => {
  b.addEventListener("mouseenter", () => {
    let s = new Audio(`black-keys/${i}.mp3`);
    playSound(s);
  });
});
wkeys.forEach((w, i) => {
  w.addEventListener("mouseenter", () => {
    let s = new Audio(`white-keys/${i}.mp3`);
    playSound(s);
  });
});

function playSound(s) {
  s.pause();
  s.currentTime = 0;
  s.play();
}

// white keys
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const thirteen = document.getElementById("thirteen");
const fourteen = document.getElementById("fourteen");
const fifteen = document.getElementById("fifteen");
const sixteen = document.getElementById("sixteen");
const seventeen = document.getElementById("seventeen");
const eighteen = document.getElementById("eighteen");
const nineteen = document.getElementById("nineteen");
const twenty = document.getElementById("twenty");
const twentyone = document.getElementById("twentyone");

//black keys
const bone = document.getElementById("bone");
const btwo = document.getElementById("btwo");
const bthree = document.getElementById("bthree");
const bfour = document.getElementById("bfour");
const bfive = document.getElementById("bfive");
const bsix = document.getElementById("bsix");
const bseven = document.getElementById("bseven");
const beight = document.getElementById("beight");
const bnine = document.getElementById("bnine");
const bten = document.getElementById("bten");
const beleven = document.getElementById("beleven");
const btwelve = document.getElementById("btwelve");
const bthirteen = document.getElementById("bthirteen");
const bfourteen = document.getElementById("bfourteen");
const bfifteen = document.getElementById("bfifteen");

// white keys
addEventListener("keyup", (e) => {
  if (e.key === "a") {
    one.classList.remove("white-active");
  }
  if (e.key === "s") {
    two.classList.remove("white-active");
  }
  if (e.key === "d") {
    three.classList.remove("white-active");
  }
  if (e.key === "f") {
    four.classList.remove("white-active");
  }
  if (e.key === "g") {
    five.classList.remove("white-active");
  }
  if (e.key === "h") {
    six.classList.remove("white-active");
  }
  if (e.key === "j") {
    seven.classList.remove("white-active");
  }
  if (e.key === "k") {
    eight.classList.remove("white-active");
  }
  if (e.key === "l") {
    nine.classList.remove("white-active");
  }
  if (e.key === ";") {
    ten.classList.remove("white-active");
  }
  if (e.key === "'") {
    eleven.classList.remove("white-active");
  }
  if (e.key === "z") {
    twelve.classList.remove("white-active");
  }
  if (e.key === "x") {
    thirteen.classList.remove("white-active");
  }
  if (e.key === "c") {
    fourteen.classList.remove("white-active");
  }
  if (e.key === "v") {
    fifteen.classList.remove("white-active");
  }
  if (e.key === "b") {
    sixteen.classList.remove("white-active");
  }
  if (e.key === "n") {
    seventeen.classList.remove("white-active");
  }
  if (e.key === "m") {
    eighteen.classList.remove("white-active");
  }
  if (e.key === ",") {
    nineteen.classList.remove("white-active");
  }
  if (e.key === ".") {
    twenty.classList.remove("white-active");
  }
  if (e.key === "/") {
    twentyone.classList.remove("white-active");
  }
});

addEventListener("keydown", (e) => {
    if (e.key === "a") {
      one.classList.add("white-active");
      playSound(new Audio("white-keys/0.mp3"));
    }
  
    if (e.key === "s") {
      two.classList.add("white-active");
      playSound(new Audio("white-keys/1.mp3"));
    }
    if (e.key === "d") {
      three.classList.add("white-active");
      playSound(new Audio("white-keys/2.mp3"));
    }
    if (e.key === "f") {
      four.classList.add("white-active");
      playSound(new Audio("white-keys/3.mp3"));
    }
    if (e.key === "g") {
      five.classList.add("white-active");
      playSound(new Audio("white-keys/4.mp3"));
    }
    if (e.key === "h") {
      six.classList.add("white-active");
      playSound(new Audio("white-keys/5.mp3"));
    }
    if (e.key === "j") {
      seven.classList.add("white-active");
      playSound(new Audio("white-keys/6.mp3"));
    }
    if (e.key === "k") {
      eight.classList.add("white-active");
      playSound(new Audio("white-keys/7.mp3"));
    }
    if (e.key === "l") {
      nine.classList.add("white-active");
      playSound(new Audio("white-keys/8.mp3"));
    }
  
    if (e.key === ";") {
      ten.classList.add("white-active");
      playSound(new Audio("white-keys/9.mp3"));
    }
    if (e.key === "'") {
      eleven.classList.add("white-active");
      playSound(new Audio("white-keys/10.mp3"));
    }
    if (e.key === "z") {
      twelve.classList.add("white-active");
      playSound(new Audio("white-keys/11.mp3"));
    }
    if (e.key === "x") {
      thirteen.classList.add("white-active");
      playSound(new Audio("white-keys/12.mp3"));
    }
    if (e.key === "c") {
      fourteen.classList.add("white-active");
      playSound(new Audio("white-keys/13.mp3"));
    }
    if (e.key === "v") {
      fifteen.classList.add("white-active");
      playSound(new Audio("white-keys/14.mp3"));
    }
    if (e.key === "b") {
      sixteen.classList.add("white-active");
      playSound(new Audio("white-keys/15.mp3"));
    }
    if (e.key === "n") {
      seventeen.classList.add("white-active");
      playSound(new Audio("white-keys/16.mp3"));
    }
    if (e.key === "m") {
      eighteen.classList.add("white-active");
      playSound(new Audio("white-keys/17.mp3"));
    }
    if (e.key === ",") {
      nineteen.classList.add("white-active");
      playSound(new Audio("white-keys/18.mp3"));
    }
    if (e.key === ".") {
      twenty.classList.add("white-active");
      playSound(new Audio("white-keys/19.mp3"));
    }
    if (e.key === "/") {
      twentyone.classList.add("white-active");
      playSound(new Audio("white-keys/20.mp3"));
    }
  });

// black keys
  addEventListener("keyup", (e) => {
    if (e.key === "q") {
      bone.classList.remove("black-active");
    }
    if (e.key === "w") {
      btwo.classList.remove("black-active");
    }
    if (e.key === "e") {
      bthree.classList.remove("black-active");
    }
    if (e.key === "r") {
      bfour.classList.remove("black-active");
    }
    if (e.key === "t") {
      bfive.classList.remove("black-active");
    }
    if (e.key === "y") {
      bsix.classList.remove("black-active");
    }
    if (e.key === "u") {
      bseven.classList.remove("black-active");
    }
    if (e.key === "i") {
      beight.classList.remove("black-active");
    }
    if (e.key === "o") {
      bnine.classList.remove("black-active");
    }
    if (e.key === "p") {
      bten.classList.remove("black-active");
    }
    if (e.key === "1") {
      beleven.classList.remove("black-active");
    }
    if (e.key === "2") {
      btwelve.classList.remove("black-active");
    }
    if (e.key === "3") {
      bthirteen.classList.remove("black-active");
    }
    if (e.key === "4") {
      bfourteen.classList.remove("black-active");
    }
    if (e.key === "5") {
      bfifteen.classList.remove("black-active");
    }
    
  });
  addEventListener("keydown", (e) => {
    if (e.key === "q") {
      bone.classList.add("black-active");
      playSound(new Audio("black-keys/0.mp3"))
    }
    if (e.key === "w") {
      btwo.classList.add("black-active");
      playSound(new Audio("black-keys/1.mp3"))
    }
    if (e.key === "e") {
      bthree.classList.add("black-active");
      playSound(new Audio("black-keys/2.mp3"))
    }
    if (e.key === "r") {
      bfour.classList.add("black-active");
      playSound(new Audio("black-keys/3.mp3"))
    }
    if (e.key === "t") {
      bfive.classList.add("black-active");
      playSound(new Audio("black-keys/4.mp3"))
    }
    if (e.key === "y") {
      bsix.classList.add("black-active");
      playSound(new Audio("black-keys/5.mp3"))
    }
    if (e.key === "u") {
      bseven.classList.add("black-active");
      playSound(new Audio("black-keys/6.mp3"))
    }
    if (e.key === "i") {
      beight.classList.add("black-active");
      playSound(new Audio("black-keys/7.mp3"))
    }
    if (e.key === "o") {
      bnine.classList.add("black-active");
      playSound(new Audio("black-keys/8.mp3"))
    }
    if (e.key === "p") {
      bten.classList.add("black-active");
      playSound(new Audio("black-keys/9.mp3"))
    }
    if (e.key === "1") {
      beleven.classList.add("black-active");
      playSound(new Audio("black-keys/10.mp3"))
    }
    if (e.key === "2") {
      btwelve.classList.add("black-active");
      playSound(new Audio("black-keys/11.mp3"))
    }
    if (e.key === "3") {
      bthirteen.classList.add("black-active");
      playSound(new Audio("black-keys/12.mp3"))
    }
    if (e.key === "4") {
      bfourteen.classList.add("black-active");
      playSound(new Audio("black-keys/13.mp3"))
    }
    if (e.key === "5") {
      bfifteen.classList.add("black-active");
      playSound(new Audio("black-keys/14.mp3"))
    }
    
  });