import { $, $$} from "../utils/dom.js"


const selector = $("#selector");
const bodyChanger = $("body");

// selector.addEventListener("change", () => {
//     bodyChanger.dataset.theme = selector.value;
// })


selector.addEventListener("change", applyTheme);



function applyTheme(){
    let theme = selector.value;
    bodyChanger.dataset.theme = theme;

    if(theme === "dark"){
        localStorage.setItem("theme", "dark")
    }else if (theme === "light"){
        localStorage.setItem("theme", "light")
    }else{
        localStorage.setItem("theme", "hawaii")
       
    }
}

function setTheme(){
    let getTheme = localStorage.getItem("theme");
    bodyChanger.dataset.theme = getTheme;
}

setTheme();