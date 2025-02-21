const baseUrl ="https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


for(let select of dropdowns){
    for (currCode in countryList){
        // console.log(code,countryList[code]);
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected="selected"
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}
const updateFlag = (element)=>{
    // console.log(element);
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amoVal=amount.value;
    if(amoVal === "" || amoVal < 1){
        // amoVal = 1;
        amount.value="1";
    };
    // console.log(fromCurr.value,toCurr.value);
    const URL=`${baseUrl}/${fromCurr.value}_${toCurr.value}.json`;
    // baseUrl=URL;
    let response = await fetch(URL);
    console.log(response);
});