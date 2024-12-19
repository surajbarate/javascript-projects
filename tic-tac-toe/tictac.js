let boxes = document.querySelectorAll(".box1");
let reset = document.querySelector(".reset");
let mess = document.querySelector(".mess");
let newbtn = document.querySelector(".newgamebtn");
let hide = document.querySelector(".hide");
let messagecont = document.querySelector(".message-cont");

let turno = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box1) => {
    box1.addEventListener("click", () => {
        if (turno) {
            box1.innerText = "X";
            turno = false;
        }
        else{
            box1.innerText="O";
            turno=true;
        }
        box1.disabled =true;

        checkwinner();

    })
})

const resetgame =() =>{
    
        turno = true;
        enabled();
        messagecont.classList.add("hide");
    
}
 

const disabled =() =>{
    for (let box1 of boxes) {
        box1.disabled=true;
    }
}
 
const enabled =() =>{
    for (let box1 of boxes) {
        box1.disabled=false;
        box1.innerText="";
    }
}

const showwinner =(winner) =>{
    mess.innerText=`congratulations winner is ${winner}`;
    messagecont.classList.remove("hide");
    disabled();
}

const checkwinner = () =>{
    for (let pattern of winpattern) {
        let pos1value= boxes[pattern[0]].innerText;
        let pos2value= boxes[pattern[1]].innerText;
        let pos3value= boxes[pattern[2]].innerText;

        if (pos1value != "" && pos2value != ""  && pos3value !=""){
            if(pos1value === pos2value && pos1value === pos3value){
                console.log("winner")
                showwinner(pos1value);
            }
           
        }
        
    }
}

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);