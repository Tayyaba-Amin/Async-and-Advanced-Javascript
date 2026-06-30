//Destructuring: Extract values from arrays or objects.

// Array
const numbers = [10, 20, 30];
const [a, b] = numbers;
console.log(a); 
console.log(b);

//Object
const user = {
    name: "John",
    age: 25
};
const { name, age } = user;
console.log(name);
console.log(age);
const { name: userName } = user;
console.log(userName);