
/*
 * const prevents a variable from being reassigned.
 */
"use strict";

const x="foo";
console.log(x)

x="bar"; // fails silently
console.log(x)  // prints foo


