// Iterator: An iterator is an object that keeps track of where you are while iterating. It has one important method "next()"
const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());