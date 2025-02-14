/************************Create a function using the “function” keyword that takes a String as an argument &returns the number of vowels in the string.***********************/


// function countvowels(str){
//     let count=0;
//     for(let i of str){
//         if(i === "a" || i === "e" || i === "i"|| i === "o"|| i === "u"){
//             count++; 
//         }
//     }
//     console.log(count);
// }
// countvowels("hello");

/**************Qs. Create an arrow function to perform the same task***********/

// const arrowvowels=(str)=>{
//     let count=0;
//     for(let i of str){
//         if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// arrowvowels("hello");

// let arr=[1,2,3,4,5];
// arr.forEach (function printval (val){
//     console.log(val);
// })

// let str=["surat","delhi","pune"];
// str.forEach((val,i,arr)=>{
//     console.log(val.toUpperCase(),i,arr);
// })


/*Qs. For a given array of numbers, print the square of each value using the forEach loop*/

//1 method 
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// })
//2 method
// let square=(val)=>{
//     console.log(val*val);
// };
// arr.forEach(square)

/*********arr map square*********/
// let arr=[54,68,47,98];
// let sqe= arr.map((val)=>{
//     // console.log(val);
//     return val*val;
// })
// console.log(sqe);

/*********arr filter even number*********/
// let num=[1,2,3,4,5,6];

// let evennum= num.filter((val)=>{
//     return val%2===0;
// })

// console.log(evennum);


/*********arr reduce retun sum*********/
// let arr=[54,85,69,75,45];

// let totel=arr.reduce((prev,cur)=>{
//     return prev+cur;
// })
// console.log(totel);


/*********arr reduce max num retun*********/


// let arr=[85,75,98,65,42];

// let maxnum= arr.reduce((prev,cur)=>{
//     return prev > cur ? prev : cur;
// })
// console.log(maxnum);

/***We are given array of marks of students. Filter our of the marks of students that scored 90+.***/
// let marck=[85,78,98,96,45,78,92,97,75,65,52];
// let topper=marck.filter((val)=>{
//     return val >= 90;
// })
// console.log(topper);


/*Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate sum of all numbers in the array.
    Use the reduce method to calculate product of all numbers in the array.
*/


//  let n=prompt("Enter Number");
//  let arr=[];
//  for(i=1;i<=n;i++){
//     arr[i-1]=i;
//  }
//  console.log(arr);
//  let sum=arr.reduce((prev,cru)=>{
//     return prev+cru;
//  })
//  console.log(`sum =${sum}`);

//  let factorial= arr.reduce((prev,cru)=>{
//     return prev*cru;
//  })
//  console.log(factorial);
console.dir(document.body);
console.log(document.body);
// document.body.style.backgroundColor="red";  
// document.body.childNodes[1].innerText="abc";  
document.getElementById("heading");