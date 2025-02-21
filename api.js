const url = "https://www.opensanctum.com/v1/religion/id/3";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts = async () => {
    console.log("Getting data...");
    let response = await fetch(url);
    console.log(response); // JSON Format
    let data = await response.json();
    console.log(data.name);
    factPara.innerText=data.description;
}
btn.addEventListener("click",getFacts);