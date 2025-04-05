let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count = 0;
let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        count++;
        if(turnO == true){
            box.innerHTML = "O";
            box.style.backgroundColor = "lightblue";
            turnO = false;
        }
        else{
            box.innerHTML = "X";
            box.style.backgroundColor = "lightblue";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
        box.style.backgroundColor = "";
    }
};

const showwinner = (winner) => {
    msg.innerHTML = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide"); 
    disableboxes();  
};

const showdraw = () => {
    msg.innerHTML = "DRAW";   
    msgcontainer.classList.remove("hide"); 
    disableboxes();
};

function checkwinner() {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("Winner", pos1);
                showwinner(pos1);
            }
        }
        else if (count == 9) {
            showdraw();
        }
    }
}

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
