// // let mode=document.querySelector("#modbtn");
// // let currMode="light";
// // mode.addEventListener("click",()=>{
// //     if(currMode == "light"){
// //         currMode="dark";
// //         document.querySelector("body").style.backgroundColor="black";
// //     }else{
// //         currMode="light";
// //         document.querySelector("body").style.backgroundColor="White";
// //     }
// //     console.log(currMode);
// // })

// //by add and remove class
// let btnMode=document.querySelector("#modbtn");
// let currMode="light";
// let body=document.querySelector("body");
// btnMode.addEventListener("click",()=>{
//     if(currMode == "light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// })
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
};

const drawGame =()=>{
    console.log("game was draw");
    msg.innerText="Game was a draw. Play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You Win! your ${userChoice} beat ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You lose ${compchoice} beat your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compchoice=gencompChoice();
    console.log("comp choice =",compchoice);

    if(userChoice === compchoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin=compchoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            //scissors,rock
            userWin=compchoice === "scissors"?false:true;
        }else{
            //rock,paper
            userWin=compchoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compchoice);
    }
};
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clickd",userChoice);
        playGame(userChoice);
    });
});


// let inputvalue = document.querySelector("#one");
// let daypara = document.querySelector("#two");

// inputvalue.addEventListener("input", () => {
//     daypara.value = inputvalue.value;
// });

// let src=document.querySelector("#one");
// let dst=document.querySelector("#two");
//   window.onload=()=>{
//       src.addEventListener("input",()=>{
//         dst.value=src.value;
//       });
//   };

const student ={
  fullName:"Romil Sangani",
  marks:94.4,
  printmarks:()=>{
    console.log("mark =",this.marks);
  },
};

const employee={
  clltex(){
    console.log("tex is 10%");
  },
}
const karan={
  salary:50000,
}
karan.__proto__=employee;