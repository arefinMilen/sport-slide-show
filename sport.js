const sportElement = document.querySelectorAll(".sport-element");
// console.log(sportElement);
let countElement= 1;
setInterval(()=>{
    countElement++;
    let currentElement=document.querySelector(".current");
    currentElement.classList.remove("current");
    
    if(countElement>sportElement.length)
    {
        sportElement[0].classList.add("current");
        countElement= 1;
    }
    else{

        currentElement.nextElementSibling.classList.add("current");
    }
    

},2000);
