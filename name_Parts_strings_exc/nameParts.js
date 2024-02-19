const name1 = "Peter Heronimous Lind";
const name2 = "peter"
const name3 = name2.slice(0,2) + name2.charAt(2).toUpperCase() + name2.slice(3).toLowerCase ();
// const name4 = name2[0].toUpperCase() + name2.slice(1);

let theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";
let splittedTheText = theText.split("ord");


// console.log(`Dette er den originale text: ${theText}`);

// console.log(" ")

//gør det samme erstatter ordet "ord" med "ting" i theText variablen.
// console.log(splittedTheText.join("ting"));
// console.log(theText.replaceAll("ord", "ting"));




const firstName = name1.substring(0 ,name1.indexOf(" "))
const middleName = name1.substring(name1.indexOf(" ") + 1,name1.lastIndexOf(" "))
const lastName = name1.substring(name1.lastIndexOf(" ") + 1)

console.log("firstname: ",firstName)
console.log("middlename: ", middleName)
console.log("lastname: ", lastName)
// console.log(name3)
// console.log(name4)

