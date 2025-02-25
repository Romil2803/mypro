// function addText() {
//     let inputText = document.getElementById("textInput").value;
//     let targetArea = document.getElementById("targetArea");
  
//     targetArea.innerHTML += inputText + "<br>";
  
//     document.getElementById("textInput").value = "";
//   }
//   const btn=document.querySelector("button");
//   btn.addEventListener("click",addText)

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const span1= document.getElementById("#span1");
// const btn = document.querySelector("#btn");

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let a = document.createElement("a");
        a.innerHTML="\u2714";
        li.appendChild(a);
        let span2 = document.createElement("span");
        span2.innerHTML="\u00d7";
        li.appendChild(span2);
        // li.appendChild(span1);
    }
    inputBox.value = "";
}
// btn.addEventListener("click",addTask());
listContainer.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
},false)