"use strict";

// interact with result of functions that return an object

function getSymbol() {
  return {
    und: 'AAPL',
    price: 23.5,
    expiration: '03-04-2017',
  }
}

var { und } = getSymbol();
console.log(und);


// pull variables from deeply nested object structures

var o = { schedule: { quarter: 1, numClasses: 5, classes: { per1: "Math", per2: "Bio"}}}

var { schedule: { numClasses, classes: { per1: first }}} = o
console.log(numClasses);
console.log(first);
 
