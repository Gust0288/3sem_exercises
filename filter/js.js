const animals = [{name: "mandu", type: "cat"}, {name: "Mia", type: "cat"},{name: "Leeloo", type:"dog"}, {name:"Scoobydoo", type:"dog"}]

function isCat(animal){
    if (animal.type === "cat"){
        return true
    }else{
        return false
    }
}
function isDog(animal){
    if (animal.type === "dog"){
        return true
    }else{
        return false
    }
}

function all(animal){
    return true
}
function none(animal){
    return false
}

animals.filter(all);
animals.filter(none);

const onlyCats = animals.filter(isCat);
const onlyDogs = animals.filter(isDog);

console.log("Er det en kat? ", isCat(animals[0]));
console.log("Er det en kat? ", isCat(animals[1]));
console.log("Er det en kat? ", isCat(animals[2]));
console.log("Er det en kat? ", isCat(animals[3]));

console.log(onlyCats);
console.log(onlyDogs);