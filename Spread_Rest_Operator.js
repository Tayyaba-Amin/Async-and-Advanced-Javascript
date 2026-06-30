// Spread Operator(...): Copies or expands arrays/objects.
//Arrays
const arr1 = [1,2];
const arr2 = [...arr1,3,4];
console.log(arr2);

//Objects
const user = {
    name: "Ali"
};
const updated = {
    ...user,
    age: 24
};
console.log(updated);

//Rest Operator: Collects remaining values.
const [first, ...rest] = [1,2,3,4];
console.log(first); 
console.log(rest); 

function sum(...numbers) {
    return numbers.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3,4,5));