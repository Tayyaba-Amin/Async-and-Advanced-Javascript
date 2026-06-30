"use strict";

//this keyword refers to the execution context—it points to the object that is currently calling the function. Its value is not fixed but depends entirely on how a function is invoked, not where it is defined.

//Global Context
console.log(this); 

//Standalone Functions
function test() 
{ console.log(this); }
test();

//Object Methods
const person = {
  name: "Tayyaba",
  greet() { console.log("Hello " + this.name); }
};
person.greet(); 

//Arrow function
const obj = {
  name: "Ali",
  arrow: () => console.log(this.name)
};
obj.arrow(); 

//Explicit binding
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}
// 1. using call()
const user1 = { name: "Tayyaba" };
// Purpose: Call greet immediately with `this = user`
greet.call(user1, "Hello", "!");

// 2. using apply
const user2 = { name: "Ali" };
const args = ["Hi", "!!"];
// Purpose: Call greet immediately with `this = user` and array args
greet.apply(user2, args); 

// 3. using bind
const user3 = { name: "Sara" };
// Purpose: Create a new function with `this = user`
const boundGreet = greet.bind(user3);
boundGreet("Hey","!"); 

//New Binding
function Person(name) {
  this.name = name;
}
const p1 = new Person("Ali");
console.log(p1.name); // "Ali"



