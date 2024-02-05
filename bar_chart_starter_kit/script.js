import { getRandomNumber } from "../utils/numbers.js";

const chartArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const list = document.querySelector("ul");

let currentIndex = 0;
let elementsCount = 0;

function createChart(){
    // const numberOfArrEL = chartArr.length;

    if(currentIndex < chartArr.length){
    const randomNumber = getRandomNumber(100);
    const li = document.createElement("li");
    li.style.setProperty("--height", randomNumber);
    list.appendChild(li);

    currentIndex++;
    elementsCount++;
}else{
    clearInterval(interval1)
}
console.log(`Antal charts: ${elementsCount}`)
}

const interval1 = setInterval(createChart, 1000);


