/****************Practice*******************/

// let fullName= prompt("Enter Your full Name");
// let usearName="@"+fullName+fullName.length;
// console.log(usearName);

/****************Array*******************/

// let hero=["ironman","thor","batman","spiderman"];
// console.log(hero);
// console.log(hero.length);
// console.log(hero[2]);//Array Indices(index)
// hero[0]="captain America";//Array index value change
// console.log(hero[0]);

//for loop
// let hero=["ironman","thor","batman","spiderman"];
// for(let idx=0; idx < hero.length; idx++){
//     console.log(hero[idx]);
// }

//for of loop
// let cities=["surat","amdavad","gandhinagar","junaghdh","Delhi","mumbai"];
// for(let allName of cities){
//     console.log(allName.toUpperCase());
// }

/****************Practice*******************/
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i of marks){
//     sum+=i;
// }
// console.log(sum);
// let agv=sum/marks.length;
// console.log(`agv maeks is =${agv}`);










//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]Find the average marks of the entire class.

// let marks=[75,78,25,65,47,86];
// let sum=0;
//for loop
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];
// }
// console.log(sum);
// let agv=sum/marks.length;
// console.log(agv);

//for of loop
// for(let i of marks){
//     sum+=i;//to find sum
// }
// console.log(sum);
// let agv=sum/marks.length;//to find agv
// console.log(`age mark is = ${agv}`)

//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let price=[250,645,300,900,50];
// let dis=0;
// let disprice;

//for of loop

// for(let i of price){
//     dis=i/10;
//     disprice=i-dis;
//     console.log(`final price after applying offer ${disprice}`);
// }

//for loop

// for(let i=0;i<price.length;i++){
//     dis=price[i]/10;
//     price[i]-=dis;
//     console.log(`final price after applying offer ${price[i]}`);
// }



/********************Array Methods*****************/

//Push( ) : add to end

// let marvalHero=["ironman","spiderman","antman","thor"]
// marvalHero.push("hulk");
// console.log(marvalHero);

//Pop( ) : delete from end & return

// let marvalHero=["ironman","spiderman","antman","thor"]
// let val=marvalHero.pop();
// console.log(marvalHero);
// console.log(val);

//toString( ) : converts array to string

// let marvalHero=["ironman","spiderman","antman","thor"]
// console.log(marvalHero);
// console.log(marvalHero.toString());


//Concat( ) : joins multiple arrays & returns result

// let marvalHero=["ironman","spiderman","antman","thor"]
// let dcHero=["superman","batman","wonderwoman"]
// console.log(marvalHero.concat(dcHero));

//Unshift( ) : add to start

// let marvalHero=["ironman","spiderman","antman","thor"]
// marvalHero.unshift("hulk");
// console.log(marvalHero);

//shift( ) : delete from start & return

// let marvalHero=["ironman","spiderman","antman","thor"]
// let val=marvalHero.shift();
// console.log(marvalHero);
// console.log(val);


//Slice( ) : returns a piece of the array

// let marvalHero=["ironman","spiderman","antman","thor"]
// console.log(marvalHero.slice(0,3));


//Splice( ) : change original array (add, remove, replace)

// let marvalHero=[1,2,3,4,5,6,7]
// marvalHero.splice(2,2,101,102);
// console.log(marvalHero);


///Qs. Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google",“IBM”,“Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

// let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netfilx"];
//     company.shift();
//     company.splice(2,2,"ola");
//     company.push("Amazon");
//     console.log(company); 

// function myfunction(mag){//parameter -->input
//     // console.log("hello");
//     // console.log("i am Romil");
//     console.log(mag);
// }
// myfunction("Romil");//argument

// function sum(x,y){//local Variables is block 
//     s=x+y;
//     return s;
// }
// let val=sum(3,4);
// console.log(val);

//arrow function
// const arrowsum=(a,b)=>{
//     console.log(a+b);
// }
// arrowsum(3,5);

// const arrowmul=(a,b)=>{
//     // console.log(a*b);
//     return a * b;
// }
// let val=arrowmul(3,4);
// console.log(val);


// function countvowels(str){
//     let val;
//     for(let i of str){
//         if(str == "a" || str == "e" || str == "i"|| str == "o"|| str == "u"){
//             val++;
//         }
//         return val;
//     }
// }
// countvowels("hello")

function countvowels(str){
    for(let i of str){
        count=0;
        if(i == "a" || i == "e" || i == "i"|| i == "o"|| i == "u"){
            count++;
        }
    }
}
countvowels("hello")
console.log(count);