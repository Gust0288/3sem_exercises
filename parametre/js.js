sayHello("Hanna", "konti");

function sayHello(firstName){
 console.log(`Hello ${firstName}`)
}

// Hvis du definere et parameter i selve funktionen skal den være til sidst eller bliver den ikke læst når du kalder funktionen.

function presentPet(animalType, animalName){
    // {console.log(`My name is ${firstname} i have a ${animalType} called ${animalName}`)}
    
    const randomNavn = randomNmb();
    document.getElementById("name").textContent = `My name is ${randomNavn} i have a ${animalType} called ${animalName}`;
}

function randomNmb (firstname = ["Erik", "Hans", "Lukas"]){
    randomNavn = Math.floor(Math.random() * firstname.length)
    return firstname[randomNavn]
}


presentPet("labrador", "Hans")






