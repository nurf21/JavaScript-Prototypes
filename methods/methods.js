// Add toString to the dictionary
// ==================================================

let dictionary = Object.create(null);

// Add non-enumerable toString method:
Object.defineProperty(dictionary, "toString", {
  value: function () {
    return Object.keys(this).join(",");
  },
  enumerable: false
});

// Add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // "__proto__" is treated as a normal key

// Only "apple" and "__proto__" are in the loop.
for (let key in dictionary) {
  console.log(key); // logs "apple", then "__proto__"
}

// Using the toString method:
console.log(dictionary.toString());

// Also, when coerced to string:
console.log("" + dictionary);