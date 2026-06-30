function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hello " + this.name);
};
const p1 = new Person("Ali");
const p2 = new Person("Sara");
p1.greet(); // Hello Ali
p2.greet(); // Hello Sara

//Prototype Inheritance
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};
const dog =Object.create(animal) // dog inherits from animal
dog.bark = function() {
  console.log("Woof!");
};
console.log(dog.eats); 
dog.walk();            
dog.bark();            

//classes
class Animal {
  eat() { console.log("Eating..."); }
}
class Dog extends Animal {
  bark() { console.log("Woof!"); }
}
const d = new Dog();
d.eat();  // "Eating..." (inherited from Animal)
d.bark(); // "Woof!"


