// Create an object with the same constructor
// ==================================================

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name);
};

// Here, Animal.prototype.constructor === Animal by default
let animal = new Animal("Cat");

// Creating a new object using the constructor property works as expected:
let animal2 = new animal.constructor("Dog");

animal.sayHi();
animal2.sayHi();
