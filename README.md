# javaScript
What is javascript?
scope in javascript
course curriculum

javascript is a high level multi-paradigm object-oriented programming language.
It is also synchronous and single threaded in behaviour
It is the language of the web and is used to make web pages and web applications work dynamically.
opportunities after javascript:
1.frontend developer:
Angular
reactjs
vuejs
2.Backend developer:
nodejs
3.Mobile application developer:
reactjs
ionic

Topics that we will cover-
1.Introduction to javascript
2.The Basics
3.Control structures and conditionals
4.ES6
5.Deep Diving into Functions
6.OOPs in JS
7.Functional Programming
8.Asynchronous JS
9.Miscellaneous

JavaScript on the Browser?
Almost Every Browser today is Empowered by javascript,

Every browser has an embedded javascript engine
For ex-Chrome uses v8 engine, mozilla firefox uses spider monkey

javascript was initially created to "make web pages alive".

The programs in this language are called scripts. They can be written right in a web page's HTML and run automatically as the page loads.

What is Node.js
Installing Node.js
Running your code with Node.js

What is Node.js?
Node.js is an open-source, cross-platform, back-end javascript runtime environment that runs on the v8 engine and executes javascript code outside a web browser, which was designed to build scalable network applications, 
It was  developed by Ryan Dahl and it uses chrome's v8 engine
Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in javascript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

Variables in javascript:
Variables are containers for storing data(storing data values).
Variable means anything that can vary. In javascript, a variable stores the data value that can be changed later on.
The var Keyword:
There is a reserved keyword in javascript which is used to declare variables that is the 'var' keyword.
Dynamically vs Statically typed languages:
Statically tped languages: each variable and expression is already known at compile time.
Dynamically typed languages: variables can receive different values at runtime and their type is defined at run time.
Rules to declare a variable:
All javascript variables must be identified with unique names.
These unique names are called identifiers.
Identifiers can be short names(like x and y) or more descriptive names(age,sum,totalVolume).
The general rules for constructing names for variables(unique identifiers) are:
*Names can contain letters, digits, underscored, and dollar signs.
*Names must begin with a letter.
*Names can also begin with $ and _ 
*Names are case sensitive(y and Y are different variables).
*Reserved words (like javascript keywords) cannot be used as names.

Arrays in Javascript:
What are Arrays?
Similar to a variable an array also stores data but it can store multiple data items.
It enables storing multiple values under a same variable name and we can also perform operations on them by using different methods and properties also every value gets a sequential index starting from 0.
In javascript arrays can store values of different data types whereas in statically typed languages arrays will store only that data types whereas in statically typed language arrays will store only that data by which the array is defined.
Ex: var arr = [12, "Ferrai", true, 12,.4]
//inbuilt js array methods
var arr2 = [12,13,14,56]
//pop method
arr2.pop()
arr2.push(100)
arr2.shift() -removes first element
arr2.unshift(102) -adds element at first

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
