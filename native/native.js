// Add method "f.defer(ms)" to functions
// ==================================================

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    // Using an arrow function to preserve "this" from the wrapper call:
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f() {
  console.log("Hello!");
}

f.defer(1000)();

function f2(a, b) {
  console.log(a + b);
}

// Create a delayed version of "f" that waits 1000 ms before executing.
let deferredF = f2.defer(1000);

// Calling the wrapped function with arguments 1 and 2:
deferredF(1, 2);
