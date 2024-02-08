import { getRandomNumber } from "../utils/numbers.js";

const chartArr = [];

const list = document.querySelector("ul");
setInterval(createChart, 1000);

// "li tags i dommen skal udkommenteres!!" ----------------
// function createChart(){
//     const randomNumber = getRandomNumber(100);
//     chartArr.push(randomNumber);
//     console.log(chartArr)
//     const li = document.createElement("li");
//     li.style.setProperty("--height", randomNumber);
//     list.appendChild(li);
//     if(chartArr.length > 19){
//         chartArr.shift();
//         list.removeChild(list.firstChild);
//     }
// }
// "li tags i dommen skal udkommenteres!!" -----------------


// ------------ ForEach ------------------

function createChart(){
    chartArr.push(getRandomNumber(100));

    document.querySelectorAll("li").forEach((li, i) => {
        li.style.setProperty("--height", chartArr[i]);
    });
    if(chartArr.length > 20){
        chartArr.shift();
    }
}

// ------------ ForEach -------------------------


