"use strict";

// Multiple body statements
[1,2,3].map( n => {
  let a = n * 2;
  console.log("hello: " + a);
});

// Returning objects requires parens
[5,4,3,2,1,0].map( n => console.log(({
  val: n
})));

