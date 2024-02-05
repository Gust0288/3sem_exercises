const person3 = {
    firstName: "Harry",
    lastname: "Potter",
    hired: false
}
const person4 = {
    firstName: "Fred",
    lastname: "Weasly",
    hired: false
}

function hire (person){
    person.hired = true;
}
function fire (person){
    person.hired = false;
}

function fireorHire(action ,person){
action(person)
}

fireorHire(hire, person3);
console.log(person3)