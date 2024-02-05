import { $, $$ } from "../utils/dom.js";



const guess = $("p");
const start = $("#start");
const higher = $("#higher");
const lower = $("#lower");
const correct = $("#correct");
const correctShow = $("h1");


let min = 1;
let max = 100;

correct.addEventListener("click", ()=>{
    correctShow.textContent = "KORREKT!"
})

function updateGuess() {
    return Math.floor((min + max) / 2);
}

start.addEventListener("click", () => {
    min = 1;
    max = 100;
    guess.textContent = `Mit gæt: ${updateGuess()}`;
    start.disabled = true;
    higher.disabled = false;
    lower.disabled = false;
    correct.disabled = false;
});

higher.addEventListener("click", () => {
    min = updateGuess() + 1;
    guess.textContent = `Mit gæt: ${updateGuess()}`;
});

lower.addEventListener("click", () => {
    max = updateGuess() - 1;
    guess.textContent = `Mit gæt: ${updateGuess()}`;
});










