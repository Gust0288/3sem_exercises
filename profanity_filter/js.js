const curseWords = [  
    {    bad: "var",    good: "const",  },  
    {    bad: "float",    good: "grid",  },  
    {    bad: "marquee",    good: "just don't",  },]; 

const textElement = document.querySelector("p");
const replaceButton = document.getElementById("replaceButton");

replaceButton.addEventListener("click", () => {
    const originalText = textElement.innerText;
    let newText = originalText;
    let foundCurseWord = false;
  
    curseWords.forEach((word) => {
        if (originalText.includes(word.bad)) {
            newText = newText.replaceAll(word.bad, word.good);
        } else{
            foundCurseWord = true; // Set foundCurseWord to true when replacing the bad word
        }      
    });
    if (foundCurseWord) {
      alert("It already is SFW");
      console.log("show up alert!!")
    } else {
      textElement.innerText = newText;
    }
  
  });

// alert dosn't work


