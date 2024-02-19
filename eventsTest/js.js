
// document.querySelector("button").addEventListener("click", (evt)=>{
//     console.log("evt: ", evt);
//     console.log("evt: ", evt.target);
//     console.log("evt: ", evt.currentTarget);
//     console.log("evt: ", evt.x);
//     console.log("evt: ", evt.y);
//     console.log("evt: ", evt.altKey);
// })
const ball = document.querySelector("#ball");


document.querySelector("button").addEventListener("click", moveBall)
document.querySelector("button").addEventListener("pointerdown", (evt) => {
    console.log(evt.pressure)
})

function moveBall(){
    ball.classList.add("ani");
    ball.addEventListener("animationend", endAnditerate)
    ball.addEventListener("animationiteration", endAnditerate)

}

function endAnditerate(evt){
    console.log("Iterate", evt);
    console.log(evt.type);
    
    if (evt.type === "animationend"){
        ball.classList.remove("ani");

    }
}





