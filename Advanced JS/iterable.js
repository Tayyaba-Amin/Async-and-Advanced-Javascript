//Iterable: An iterable is an object that can be looped over. (Arrays, Strings, Maps, Sets are interable and Plain objects, Numbers are non-iterable). An iterable has a special method "Symbol.iterator"

// const arr = [10, 20, 30];
// console.log(arr[Symbol.iterator]);
//Arrays
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value);
}
//Strings
const str = "ABC";
for (const ch of str) {
    console.log(ch);
}
//Objects 
const user = {
    name: "Ali",
    age: 20
};
// for (const item of user) {
//     console.log(item);
// }
for (const key of Object.keys(user)) {
    console.log(key);
}
