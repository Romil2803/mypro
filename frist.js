//  fullname="Romil";
//  age=19;
//  x=null
//  y=undefined;
//  console.log(age);
// var age = 19;
// var age = 20;
// var age = 21;
// console.log(age);
// let fullname = "Romil";
// // let fullname = "Raj";
//  fullname = "Raj";
//  fullname = "Rohit";
// console.log(fullname);
// const x = 3.14;
// // x = 3.15;
// console.log(x);
// {
//     let y = 10;
//     // y = 20;
//     // let y = 100;
//     console.log(y);
// }
// {
//     let y = 20;
//     console.log(y);
// }

// const student = {
//     fullname: "Romil",
//     age: 19,
//     marcks: 90,
//     isPass: true
// }

// student["age"] = student["age"] + 1;

// // console.log(student);
// // console.log(student["age"]);
// console.log(student.age);

//Arithmetic Operators

// let x = 10;
// let y = 20;
// console.log("x + y =", x + y);
// console.log("x - y =", x - y);
// console.log("x * y =", x * y);
// console.log("x / y =", x / y);
// console.log("x % y =", x % y);
// console.log("x ** y =", x ** y);

//unary operator

// console.log("x++ =", x++);
// console.log("x =", x);

// console.log("x-- =", x--);
// console.log("x =", x);

// assignment operator

// a = 10;
// b = 20;
// // a += b;
// // a -= b;
// // a *= b;
// // a /= b;
// // a %= b;
// // a **= b;
// console.log("a =",a);

//comparison operator

// a=10;   
// b="20";

// console.log("a == b", a == b);
// console.log("a != b", a != b);
// console.log("a === b", a === b);
// console.log("a !== b", a !== b);  

// logical operator

// a = 30;    
// b = 20;

// console.log("a > b && a === 10", a > b && a === 30);
// console.log("a > b && a === 10", a < b && a === 20);
// console.log("a < b && a === 10", a < b || a === 30);
// console.log("a < b && a === 10", a < b || a === 20);
// console.log("!(a < b)", !(a < b));
// console.log("!(a > b)", !(a > b));

// conditional statement
// if
// let age = 16;

// if (age >= 18) {
//     console.log("You are eligible for vote");
// }

// if (age < 18) {
//     console.log("You are not eligible for vote");
// }

// let mode="dark";
// let color;

// if(mode == "dark"){
//     color="black";
// }
// if (mode == "light"){
//     color="white";
// }
// console.log(color);

//if else

// let mode="light";
// let color;

// if(mode == "dark"){
//     color="black";
// }
// else{
//     color="white";
// }
// console.log(color);

// let a = 18;

// if (a % 2 == 0) {
//     console.log(a,"is Even");
// }
// else {
//     console.log(a,"is Odd");
// }

// let a = 10;
// let b = 20;

// if (a > b) {
//     console.log("a is max");
// }
// else {
//     console.log("b is max");
// }

//else if
// let a = 10;
// let b = 20;
// let c = 30;

// if (a > b && a > c){
//     console.log("a is max");
// }
// else if (b > a && b > c){
//     console.log("b is max");
// }
// else{
//     console.log("c is max");
// }

//ternary operator
// let age = 25;

// age >= 18 ? console.log("adult") : console.log("not adult");

// alert("Hello World");
// let name= prompt("Enter value");
// if(name % 5 == 0){
//     console.log("is Multiple of 5");
// }
// else{
//     console.log("is Not Multiple of 5");
// }

let score = prompt("Enter your score");

if (score >= 95) {
    console.log("A+");
}
else if (score <= 94 && score >= 90) {
    console.log("A");
}
else if (score <= 89 && score >= 70){
    console.log("B");
}
else if (score <= 69 && score >= 60){
    console.log("C");
}
else if (score <= 59 && score >= 50){
    console.log("D");
}
else{
    console.log("Fail");
}
