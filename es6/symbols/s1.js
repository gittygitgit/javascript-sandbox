/*
 * Symbols are a new primitive type. 
 */

console.log(typeof Symbol);// function
console.log(typeof Symbol()); // symbol

// Symbols are guaranteed unique...
var a=Symbol();
var b=Symbol();

console.log(a == b); // false


// Symbols can take an optional description
var c=Symbol("hello");

// useful as keys
var o={}
var color=Symbol();
o[color]="RED";
console.log(o[color]);

