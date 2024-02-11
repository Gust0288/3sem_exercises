const curseWords = [  
    {    bad: "var",    good: "const",  },  
    {    bad: "float",    good: "grid",  },  
    {    bad: "marquee",    good: "just don't",  },]; 

const textElement = document.querySelector("p");
const replaceButton = document.getElementById("replaceButton");


replaceButton.addEventListener("click", () => {
    const originalText = textElement.innerText;
    let newText = originalText;
    let isSFW = false;
   
    
    curseWords.forEach((word) => {
      if (originalText.includes(word.bad)) {
        newText = newText.replaceAll(word.bad, word.good);
      } else{
        isSFW = true; // Set foundCurseWord to true when replacing the bad word
      }      
    });
    if (isSFW) {
      alert("It already is SFW");
      console.log("show up alert!!")
    } else {
      textElement.innerText = newText;
      textElement.style.backgroundColor = "green";
    }
  
  });


