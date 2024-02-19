const h1 = document.querySelector("h1");



document.querySelector("button").addEventListener("click", () => {
    
    if (h1.dataset.filter === "bat"){
        h1.dataset.filter = "fox";
    }else{
        h1.dataset.filter = "bat";
    }
})