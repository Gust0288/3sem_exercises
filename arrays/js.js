let letters = ["a", "b", "c", "d","e","f","g","h"]
const people = ["Harry","Ron","Hermonie"]

let result;

result = people.push("Draco"); // Adds to the array
result = people.pop(); // Pops out the last element in the array
result = people.push("Neville");
result = people.push("Luna");
result = people.slice(0.3); // method returns a shallow copy of a portion of an array into a new array object. It does not modify the original array.
result = people.splice(1,0,"Cho"); // The splice method changes the content of an array by removing, replacing, or adding elements. It modifies the original array and returns an array containing the deleted elements.
people [1] = "Ginny"; // puts the elements in that array spot and replaces it;
result = people.push("Fred","George"); // pushes the strings behind in the arrays;
result = people.indexOf("Fred"); // The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
result = people.splice(result,1); 
result = people.shift(); // Removes the first element from an array and returns that element. Modifies the original array.
result = people.unshift("Dumbeldore", "Snape", "Voldemort"); // Adds one or more elements to the beginning of an array. Modifies the original array and returns the new length of the array.
result = people.splice(3,1) // Removes 1 element at index 3 = Ginny


console.log(result);
console.log(people);

//-------------------------------------
//Making strings into arrays

const str = "abcdefghijklmn"
const arr1 = str.split("");
const arr2 = Array.from(str);
const arr3 = [...str];

console.log(arr1);
console.log(arr2);
console.log(arr3);

// Array to string

const array1 = ["Lars", " er", " en", " idiot"];

console.log(array1);
console.log(array1.join());
console.log(array1.join(''));
console.log(array1.join('-'));


//-------------------------------------
// Going through the array (for-loop) saying which spot each element has in the given array
const array = ['apple', 'banana', 'cherry'];
for (let i = 0; i < array.length; i++) {
  console.log(`Element at index ${i} is ${array[i]}`);
}

//-------------------------------------


// console.log(letters[4]);

// let newarr = letters;
// newarr[4] = '*';

// console.log(letters[4])
