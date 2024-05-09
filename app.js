const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown= document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

const fromcurr= document.querySelector(".from select");
const tocurr= document.querySelector(".to select");
for(let select of dropdown){
    for(let curr in countryList){
        let newoption= document.createElement("option");
        newoption.innerText= curr;
        newoption.value= curr;
        if(select.name==="from" && curr=== "USD"){
            newoption.selected="selected";
        }
        else if (select.name==="to" && curr=== "INR"){
            newoption.selected="selected";
        }
        select.append(newoption)

    }
    select.addEventListener("change", (evt) =>{
        updateFalg(evt.target);
    });
}
const updateFalg=(element)=>{
  let currCode = element.value;
  let countrycode= countryList[currCode];
  let newsrc= `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img= element.parentElement.querySelector("img");
  img.src= newsrc;
}
btn.addEventListener("click", async (evt)=>{
 evt.preventDefault();
 let amount= document.querySelector(".amount input");
 let amtval= amount.value;
 if(amtval==="" || amtval<1){
    amtval=1;
    amount.value="1";
 }

 let URL= `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toUpperCase()}.json`;
 let response= await fetch(URL);
 console.log(response);
})

