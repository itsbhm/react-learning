Here’s a comparison between **ES6 (ECMAScript 2015)** and **ES5** JavaScript code, showcasing key differences and improvements introduced in ES6:

---

### 1. **Variable Declaration**
#### ES5:
```javascript
var name = "Alice";
```

#### ES6:
```javascript
let name = "Alice"; // Block-scoped, mutable
const age = 30;     // Block-scoped, immutable
```
- **ES6 adds `let` and `const`** for better scoping and immutability. `var` is function-scoped, which can lead to unexpected behavior.

---

### 2. **Arrow Functions**
#### ES5:
```javascript
var add = function(a, b) {
  return a + b;
};
```

#### ES6:
```javascript
const add = (a, b) => a + b;
```
- **Arrow functions** in ES6 provide a shorter syntax and automatically bind `this` to the surrounding context.

---

### 3. **Template Literals**
#### ES5:
```javascript
var message = "Hello, " + name + "! You are " + age + " years old.";
```

#### ES6:
```javascript
const message = `Hello, ${name}! You are ${age} years old.`;
```
- **Template literals** (backticks) make string concatenation easier and more readable.

---

### 4. **Default Parameters**
#### ES5:
```javascript
function greet(name) {
  name = name || "Guest";
  return "Hello, " + name;
}
```

#### ES6:
```javascript
const greet = (name = "Guest") => `Hello, ${name}`;
```
- **Default parameters** simplify setting default values in functions.

---

### 5. **Classes**
#### ES5:
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  return "Hello, my name is " + this.name;
};
```

#### ES6:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}
```
- **ES6 classes** provide a cleaner, more declarative syntax for creating objects and inheritance.

---

### 6. **Modules**
#### ES5:
```javascript
// Exporting
var sayHello = function() {
  console.log("Hello!");
};
module.exports = sayHello;

// Importing
var sayHello = require('./module');
```

#### ES6:
```javascript
// Exporting
export const sayHello = () => console.log("Hello!");

// Importing
import { sayHello } from './module';
```
- **ES6 introduces `import` and `export`** for native module support.

---

### 7. **Destructuring**
#### ES5:
```javascript
var person = { name: "Alice", age: 25 };
var name = person.name;
var age = person.age;
```

#### ES6:
```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
```
- **Destructuring** allows easy unpacking of objects and arrays.

---

### 8. **Spread and Rest Operators**
#### ES5:
```javascript
function sum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
}
```

#### ES6:
```javascript
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
```
- **`...` (spread/rest)** makes working with arguments and arrays more concise.

---

### 9. **Promises**
#### ES5:
```javascript
function fetchData(callback) {
  setTimeout(function() {
    callback("Data received");
  }, 1000);
}

fetchData(function(data) {
  console.log(data);
});
```

#### ES6:
```javascript
const fetchData = () => new Promise((resolve) => {
  setTimeout(() => resolve("Data received"), 1000);
});

fetchData().then((data) => console.log(data));
```
- **Promises** simplify asynchronous programming, replacing callback-heavy code.

---

### 10. **Block Scope**
#### ES5:
```javascript
function test() {
  if (true) {
    var x = 10; // `x` is accessible outside the block
  }
  console.log(x); // 10
}
```

#### ES6:
```javascript
function test() {
  if (true) {
    let x = 10; // `x` is block-scoped
  }
  console.log(x); // ReferenceError: x is not defined
}
```
- **Block scoping** via `let` and `const` prevents variable leakage outside blocks.

---

### Summary of ES6 Improvements:
- **Readability and Conciseness**: Features like arrow functions and template literals reduce boilerplate code.
- **Better Scoping**: `let` and `const` replace the sometimes problematic `var`.
- **Native Modules**: Simplifies importing/exporting without third-party libraries like CommonJS.
- **Modern Features**: Promises, destructuring, and classes align JavaScript with modern programming paradigms.

Using ES6 leads to cleaner, more maintainable, and expressive code compared to ES5.