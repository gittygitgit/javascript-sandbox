/*
 * Symbols as better constants than strings.
 */
"use strict";
// instead of this...
var RED="Red";
var BLUE="Blue";
function foo(color) {
  switch(color) {
    case RED:
      return "Red";
    case BLUE:
      return "Blue";
    default:
      throw new Error("Unknown color");
  }
}

var YELLOW="Red";

console.log(foo(YELLOW));


//...do this...
RED=Symbol();
BLUE=Symbol();

function foo2(color) {
  switch(color) {
    case RED:
      return "Red";
    case BLUE:
      return "Blue";
    default:
      throw new Error("Unknown color");
  }
}
foo2(YELLOW); // throws an error

