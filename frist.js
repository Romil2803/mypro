// const student={
//     fullName:"sanganiRomil",
//     marks:89,
//     printmarks:function(){
//         console.log("mark =",this.marks)
//     },
// };
// console.log(student.printmarks());

// const emp={
//     calTex(){
//         console.log("Tex is 10%");
//     },
// }
// const arjun={
//     salary:50000,
// }
// arjun.__proto__=emp;
// console.log(arjun);
// console.log(arjun.calTex());

                                    //class and Constructor( ) method

// class toyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand/*class object property*/=brand/*function argument or parameater*/;
//     }
// }
// let fortuner= new toyotaCar("fortuner",10);
// console.log(fortuner);
// console.log(fortuner.start());
// fortuner.setBrand("fortuner");

// let lexus= new toyotaCar("lexus" ,12);
// console.log(lexus);
// console.log(lexus.start());
// lexus.setBrand("lexus");

//Inheritance and super Keyword 

// class person{
//     constructor(name){
//         this.species="homo sapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }
// class engineer extends person {
//     constructor(name){
//         super(name);//to invoke parent class constructor
//     }
    
//     work(){
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }
// class doctor extends person {
//     work(){
//         console.log("treat patients");
//     }
// }

// let engObj= new engineer("Romil");
// console.log(engObj);

// let docObj= new doctor();
// console.log(docObj);


/*Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data. 

Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data. */

// let Data="some information";

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data =",Data);
//     }
// }
//     class Admin extends User {
//         constructor(name,email){
//             super(name,email);
//         }
//         editData(){
//             Data="some new data"
//         }
//     }

// let obj=new User("Romil","ssanganiromil@gmail.com");
// let admin=new Admin("admin","admin@gmial.com");
// console.log(obj);
// console.log(admin.viewData());

//Error Handling 

// let a=2;
// let b=5;

// console.log("a =",a);
// console.log("b =",b);
// console.log("a+b =",a+b);
// console.log("a+b =",a+b);
// try{
//     console.log("a+b =",a+c);
// }catch(err){
//     console.log(err);
// }
// console.log("a+b =",a+b);
// console.log("a+b =",a+b);
// console.log("a+b =",a+b);
// console.log("a+b =",a+b);

//Asynchronous

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello");
// }, 2000);
// console.log("three");
// console.log("four");

//Callbacks

// function sum(a,b){
//     console.log(a+b);
// }
// function cal(a,b,sum){
//     sum(a,b);
//     // console.log(sum);
// }
// cal(5,4,sum);

//

// function hello(){
//     console.log("hello");
// };
// setTimeout(hello,2000);

//nesting
// let age=19;
// if(age >= 18){
//     if(age>=60){
//         console.log("senior");
//     }else{
//         console.log("middle");
//     }
// }else{
//     console.log("child");
// }

//Callback Hell

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("Data =",dataId)
//         // getNextData();
//         if(getNextData)
//         {
//             getNextData();
//         }
//     },2000); 
// }
// getData(1,()=>{
//     console.log("getting data 2.....");
//     getData(2,()=>{
//     console.log("getting data 3.....");
//         getData(3,()=>{
//     console.log("getting data 4.....");
//             getData(4);
//         });
//     });
// });

//Promises

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data =",dataId);
//             resolve("success");
//             // reject("error");
//             // getNextData();
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         },10000); 
//     });
// };

//call back hall

// function getPromise(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("hello");
//             resolve("success");
//             reject("error");
//             },4000);
//         });
// }

// function getPromise2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("hello2");
//         resolve("success");
//         reject("error");
//         },4000);
//     });
// };
// console.log("fetching data1....");
//     getPromise().then(()=>{
//     // console.log("promise fulfilled1",res);
//     console.log("fetching data2....");
//     getPromise2().then(()=>{
//         // console.log("promise fulfilled2",res);
//     });
// });

//promise chain

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//         resolve("success");
//         reject("error");
//         },3000);
//     });
// };
// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);  
// }).then((res)=>{
//     console.log(res);
// })

function api(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data",dataId);
            resolve(200);
        },2000);
    });
};

// async function getWeather() {   
//     console.log("getting data 1.....");
//     await api(1);
//     console.log("getting data 2.....");
//     await api(2);
//     console.log("getting data 3.....");
//     await api(3);
//     console.log("getting data 4.....");
//     await api(4);
//     console.log("getting data 5.....");
//     await api(5);
// }
// getWeather();

(async function getWeather() {   
    console.log("getting data 1.....");
    await api(1);
    console.log("getting data 2.....");
    await api(2);
    console.log("getting data 3.....");
    await api(3);
    console.log("getting data 4.....");
    await api(4);
    console.log("getting data 5.....");
    await api(5);
})();