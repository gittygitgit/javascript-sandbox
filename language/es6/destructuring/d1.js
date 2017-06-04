// Destructuring?

// Bind properties to variables.

"use strict";

var foo = { fname: 'Mike', lname: 'Grudkowski' }

// we create new variables and automatically bind them to the value of object props of the same name
// we're pulling out object properties as variables.
var { fname, lname } = foo;

console.log(fname);
console.log(lname);

// we can also alias object properties using variables of different name as the object properties
var { fname: fn, lname: ln } = foo

console.log(fn);
console.log(ln);
