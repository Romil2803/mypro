
/*****************prectice 1**************/
// let marck= prompt("Enter your marck (0-100):");
// let grade;
// if(marck >= 90 && marck <= 100){
//     grade="A";
// }
// else if ( marck >= 70 && marck <= 89){
//     grade="B";
// }
// else if (marck >= 60 && marck <= 69){
//     grade="C";
// }
// else if ( marck >= 50 && marck <= 59){
//     grade="D"
// }
// else{
//     grade="f"
// }
// console.log(grade);


/*****************prectice 2**************/


// let number = prompt("Enter Number :");
// if(number % 5 === 0){
//     console.log("Number is multiple of 5");
// }
// else{
//     console.log("Number is not multiple of 5");
// }

/*****************for loop**************/

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

/*****************while loop**************/

// let i=1;
// while(i <= 10){
//     console.log(i)
//     i++;
// }

/*****************do while loop**************/

// let i=1;
// do{
//     console.log(i)
//     i++;
// }
// while(i <= 10);


/*****************for of loop**************/

// let str="Hello";
// let size = 0;
// for(let i of str){
//     console.log("i =",i)
//     size++;
// }
// console.log("string size =",size)


/*****************for in loop**************/


// let student ={
//     name : "Romil",
//     age : 19,
//     cgp : 7.5,
//     isPass : true
// }
// for(let i in student){
//     console.log("key =",i,"value",student[i]);
// }

/*****************prectice 3**************/

// for(let i = 1; i <= 100;i++){
//     //even Number
//     if(i % 2 === 0){
//         console.log("even Number",i);
//     }
// }
// for(let i = 1; i <= 100;i++){
//     //odd Number
//     if(i % 2 !== 0){
//         console.log("odd Number",i);
//     }
// }

/*****************prectice 4**************/

// let gameNumber=25;

// let userNumber= prompt("guess the Number");


// while(userNumber != gameNumber){
//     userNumber=prompt("you guess the Wrong Number, guess again");
// }
// console.log("you entered the right Number :");


// let str="romil"; //position --> index or indices
// console.log(str[4]);


/*****************Template Literals in JS**************/

// const obj={
//     itme:"pan",
//     Price:25
// }
// console.log("the cost of",obj.itme,"is",obj.Price,"rupees");

// let output = `the cost of ${obj.itme} is ${obj.Price} rupees`;
// console.log(output);


/*****************Escape Characters **************/

// let str1="Romil\nSnagani";
// let str2="Romil\tSnagani";
// console.log(str1);
// console.log(str2);
// console.log(str2.length);

/*****************String Methods in JS**************/

// let str="romil";
// let str1="Sangani";
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.trim());//for trim whitespace
// console.log(str.slice(0,3)); // returns part of string
// console.log(str.concat(str1));// marge string
// let res=str + str1; //marge string
// let res1="i am"+ str + str1;
// console.log(res);
// console.log(res1);
// console.log(str.replace("r","f")); //replace
// console.log(str.charAt(0)); //to find character 


/*****************prectice 5**************/

let fullname=prompt("Enter your Full Name");
let username="@"+fullname;
console.log(username);
// console.log("@",username + username.length);