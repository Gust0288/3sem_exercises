// const person1 = {
//     firstname: "klaus",
//     age: 59,
//     student: false, 
// };

// console.log(`${person1.firstname} is ${person1.age}`)

// console.log(person1.lastName);

// person1.lastName = "Mandal";

// console.log(person1.lastName);

// person1.lastName = undefined;

// console.log("person.lastName: ", person1.lastName);
// console.log("person.middleName: ", person1.middleName);

// delete person1.lastName;

// console.log(person1);


// ---------- Modified Objects --------------

// const person1 = {
//     firstname: "klaus",
//     age: 58,
//     student: false, 
// };
// const person2 = {
//     firstname: "Bob",
//     age: 89,
//     student: ture, 
// };

// console.log(person1)

// person1.age++;

// console.log(person1);

// const person2 = person1;
// person2.firstname = "Bob";
// person2.age = 40;
// person2.student = true;

// console.log(person1.firstname, person1.age);
// console.log(person2);

// person1 = person2; Cannot be done;

// Compare Objects ----------------------------
const student1 = {
    firstName: "Harry",
    lastname: "Potter"
}
// IS NOT THE SAME
const student2 = {
    firstName: "Harry",
    lastname: "Potter"
}

student1.firstName = student2.firstName; // Not the same
student1.lastname = student2.lastname; // Not the same

// const student2 = student1;  IS THE SAME!!!

if(student1 === student2){
    console.log("They are the same");
}else{
    console.log("They are not ....")
}


