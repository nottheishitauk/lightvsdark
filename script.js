let abc= document.querySelector("#abc");
let currMode="day";
let body=document.querySelector("body");
addEventListener("click", ()=>{
    if(currMode==="day")
    {
      currMode="night";
      body.classList.add("night");
      body.classList.remove("day");
    }
    else{
      currMode= "day";
      body.classList.add("day");
      body.classList.remove("night");
    }
});