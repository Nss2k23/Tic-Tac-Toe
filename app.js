let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;
let winnerFound=false;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    count=0;
    winnerFound=false;
    enableBoxes();
    msg.setAttribute("hidden",true);
};

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
        box.style.color="black";
    } else{
        box.innerText="X";
        turnO=true;
        box.style.color="red";
    }
    box.disabled=true;
    count++;
    checkWinner();
   });
});

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }   
};

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }   
};


const showWinner=(winner)=>{
    msg.innerText=`Apobw, ${winner} na kagrene`;
    msg.removeAttribute("hidden");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let posVal1=boxes[pattern[0]].innerText;  
        let posVal2=boxes[pattern[1]].innerText;  
         let posVal3=boxes[pattern[2]].innerText;

        if(posVal1!=""&&posVal2!=""&&posVal3!=""){
            if(posVal1===posVal2&&posVal2===posVal3)
            {
                showWinner(posVal1);
                winnerFound=true;
            }
        }
    }

    if(!winnerFound&&count===9)
    {
        msg.innerText=`Draw chthlle.Heina heitriba`;
        msg.removeAttribute("hidden");
        disableBoxes();
    }
};

resetBtn.addEventListener("click",resetGame);