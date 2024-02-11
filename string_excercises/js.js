const name1 = "Hans Erik Jørgensen"
const name2 = "Hans, Dorte, Erik, Jørgen"

const german = "GoeterStrasse";

const firstName = "Jørgensen";

console.log(`Index of the last name in ${name1} is ${name1.lastIndexOf(firstName)}`)
console.log(`Index of the last name in ${name1} is ${name1.lastIndexOf("Erik")}`)
console.log(name1.slice(0,5));
console.log("*".repeat(name1.length));


// Seperate a string and make every split in to an element in an array.
console.log(name2.split(`,`))


console.log(name2.toUpperCase())
console.log(german.toLocaleUpperCase());



