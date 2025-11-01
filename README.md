# JavaScript

## What is JavaScript?
JavaScript is a high-level, multi-paradigm, object-oriented programming language.  
It is also synchronous and single-threaded in behaviour.  
It is the language of the web and is used to make web pages and web applications work dynamically.

---

### Opportunities after JavaScript:
1. **Frontend Developer:**
   - Angular  
   - ReactJS  
   - VueJS  

2. **Backend Developer:**
   - NodeJS  

3. **Mobile Application Developer:**
   - ReactJS  
   - Ionic  

---

## Course Curriculum

**Topics that we will cover:**
1. Introduction to JavaScript  
2. The Basics  
3. Control Structures and Conditionals  
4. ES6  
5. Deep Diving into Functions  
6. OOPs in JS  
7. Functional Programming  
8. Asynchronous JS  
9. Miscellaneous  

---

## JavaScript on the Browser

Almost every browser today is empowered by JavaScript.

Every browser has an embedded JavaScript engine.  
For example:  
- Chrome uses **V8 engine**  
- Mozilla Firefox uses **SpiderMonkey**

JavaScript was initially created to **"make web pages alive"**.

The programs in this language are called **scripts**.  
They can be written right in a web page's HTML and run automatically as the page loads.

---

## What is Node.js?

### Installing Node.js
### Running your code with Node.js

**Definition:**  
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.  
It was designed to build scalable network applications.  

It was developed by **Ryan Dahl** and uses **Chrome's V8 engine**.

Node.js is an open-source, cross-platform runtime environment for developing server-side and networking applications.  
Node.js applications are written in JavaScript and can be run within the Node.js runtime on macOS, Windows, and Linux.

---

## Variables in JavaScript

Variables are **containers for storing data** (storing data values).  
Variable means anything that can vary.  
In JavaScript, a variable stores the data value that can be changed later on.

### The `var` Keyword
There is a reserved keyword in JavaScript which is used to declare variables — that is the `var` keyword.

---

### Dynamically vs Statically Typed Languages

- **Statically typed languages:**  
  Each variable and expression type is already known at compile time.

- **Dynamically typed languages:**  
  Variables can receive different values at runtime and their type is defined at run time.

---

### Rules to Declare a Variable

All JavaScript variables must be identified with **unique names**.  
These unique names are called **identifiers**.  

Identifiers can be short names (like `x` and `y`) or more descriptive names (`age`, `sum`, `totalVolume`).

**Rules for constructing names:**
- Names can contain letters, digits, underscores, and dollar signs.  
- Names must begin with a letter.  
- Names can also begin with `$` or `_`.  
- Names are case sensitive (`y` and `Y` are different variables).  
- Reserved words (like JavaScript keywords) cannot be used as names.

---

## Arrays in JavaScript

### What are Arrays?

Similar to a variable, an array also stores data but it can store **multiple data items**.  
It enables storing multiple values under the same variable name, and we can also perform operations on them using different methods and properties.  
Every value gets a sequential index starting from **0**.

In JavaScript, arrays can store values of different data types.  
Whereas in statically typed languages, arrays store only the data type with which the array is defined.

**Example:**
```javascript
var arr = [12, "Ferrari", true, 12.4];
var arr2 = [12, 13, 14, 56];

// pop() method
arr2.pop();

// push() method
arr2.push(100);

// shift() - removes first element
arr2.shift();

// unshift() - adds element at first
arr2.unshift(102);```


Objects in javascript:
Introduction to javascript objects?
In javascript, an object is an unordered collection of key-value pairs. Each key-value is called a property.
The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.
Javascript provides you with many ways to create an object. The most commonly used one is to use the object literal notation.
Initializing an object with object literal notation:
Every other object in javascript describes a different entity with its properties.
var person={
firstName:"",
lastName:"",
age:50
};
//in Js objects are in key value pair
var person={
firstName:"Adam",
secondName:"Smith",
age:25,
ownsCar: false
}
accessing values froom object:
//dot notation:
console.log(person.firstName);
//bracket notation:
person['age'7u]
