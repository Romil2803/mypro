let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#New-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let trunO=true;

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const restGame = ()=>{
    trunO=true;
    enabledBox();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        // box.innerText="o";
        if(trunO){
            box.innerText="o";
            trunO=false;
        }else{
            box.innerText="x";
            trunO=true;
        }
        box.disabled=true;
        checkWiner();
    })
})

const disabledBox = ()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enabledBox = ()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBox();
}

const checkWiner =()=>{
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;

         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
         }
    }
};

newGamebtn.addEventListener("click",restGame);
resbtn.addEventListener("click",restGame);
