// console.dir(document.body);
// console.log(document.body);
// document.body.style.backgroundColor="red";  
// document.body.childNodes[1].innerText="abc";  
// let heading= document.getElementById("heading");//id name
// console.dir(heading);
// let headings= document.getElementsByClassName("heading-class");//class name
// console.dir(headings);
// console.log(headings);

// let tagName= document.getElementsByTagName("button");//tag name
// console.dir(tagName);

// let fristEle=document.querySelector("p");//1st element
// console.dir(fristEle);

// let allEle=document.querySelectorAll("p");//all element
// console.dir(allEle);

// console.dir(document.body.firstChild);

// let fruits=document.querySelector("div");
// console.dir(fruits);
// console.dir(fruits.tagName);
// console.dir(fruits.innerText);
// console.dir(fruits.innerHTML);
// console.dir(fruits.textContent);

/*Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College
students” to this text using JS.*/

// let heading=document.querySelector("h2");
// console.dir(heading.innerText);
// heading.innerText=heading.innerText + "Romil";


/*Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each
of them.*/

// let boxes=document.querySelectorAll(".box");
// // console.log(boxes[0]);
// let i=1;
// for(div of boxes){
//     console.log(div.innerText);
//     div.innerText=`New Boxes ${i}`;
//     i++;
// }
  
// let div= document.querySelector("div");//to get the attribute value
// console.log(div);

// let id=div.getAttribute("id");//to get the attribute value
// console.log(id);

// let para=document.querySelector("p");//to set the attribute value
// console.log(para.setAttribute("class","newpara"));

// let myboxes=document.querySelector("#mybox");//node.style
// myboxes.style.backgroundColor="red";
// myboxes.style.fontSize="26px";
// myboxes.innerText="hello";

// let ele=document.createElement("button")//createElement
// ele.innerText="Click me!";
// myboxes.append(ele);//adds at the end of node (inside)
// myboxes.prepend(ele);//adds at the start of node (inside)
// myboxes.before(ele);//adds at the start of node (inside)
// myboxes.after(ele); //adds after the node (outside)

// let newheading= document.createElement("h1");
// newheading.innerText="New heading";
// document.querySelector("body").prepend(newheading);

// let para=document.querySelector("p");
// para.remove();


/*Qs. Create a new button element. Give it a text “click me”, background color of red & text colorof white.*/

// let newbtn=document.createElement("button");
// newbtn.innerText="click me!";
// newbtn.style.backgroundColor="red";
// newbtn.style.Color="white";
// let btnadd= document.querySelector("body").prepend(newbtn);


/*Create a <p> tag in html, give it a class & some styling.Now create a new class in CSS and try to append this class to the <p> element.*/

// let content=document.querySelector(".content");
// content.classList.add("contentadd");


// let btn1=document.querySelector("#btn1");
// btn1.onclick= () => {
//     console.log("button was clicked");
// }

// let box1=document.querySelector("#box1");
// box1.onmouseover = () => {
//     console.log("you are inside box");
// }

// let btn2=document.querySelector("#btn2");
// btn2.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

let btn3=document.querySelector("#btn3");
btn3.addEventListener("click" ,()=>{
    console.log("btn3 was clicked - handler1");
});
btn3.addEventListener("click" ,()=>{
    console.log("btn3 was clicked - handler2");
});
const handler3=()=>{
    console.log("btn3 was clicked - handler3");
};
btn3.addEventListener("click",handler3);
btn3.addEventListener("click" ,()=>{
    console.log("btn3 was clicked - handler4");
})
btn3.removeEventListener("click",handler3);