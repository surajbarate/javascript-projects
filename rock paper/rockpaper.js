let userscore = 0;
let compscore = 0;


const images = document.querySelectorAll(".pic")
const msg = document.querySelector(".message")

const yourscore = document.querySelector(".your-score");
const compscorepara = document.querySelector(".computer-score");


const compgenerate = () => {
    const options = ["rock", "paper", "scissors"]
    const choke = Math.floor(Math.random() * 3);
    return options[choke];
}

const drawgame = () => {
    console.log("game was draw");
     msg.innerText="game was draw";
}

const showwinner =(userwin) =>{
 if(userwin === true) {
    console.log("you win")
   msg.innerText="you win"
   userscore++;
   yourscore.innerText =userscore;

    
 }
 else{
    console.log("you lose")
    msg.innerText="you lose"
    compscore++;
   compscorepara.innerText = compscore;
 }
}

const playgame = (userchoice) => {
    console.log("userchoice is ", userchoice)
    //to create computer choice
    const compchoice = compgenerate();
    console.log("computer choice is ", compchoice)
    

    if (userchoice === compchoice) {
        drawgame();
    }
  
    else {
        let userwin = false;
        if (
            (userchoice === "rock" && compchoice === "scissors") ||
            (userchoice === "paper" && compchoice === "rock") ||
            (userchoice === "scissors" && compchoice === "paper")
        ) {
            userwin = true;
        }
        showwinner(userwin);
    }
   
}



images.forEach((pic) => {
    pic.addEventListener("click", () => {
        const userchoice = pic.getAttribute("class")
        playgame(userchoice);
    });

});