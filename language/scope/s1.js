"use strict";

function foo() {
  var a="test";
}
try {
  console.out(a); // fails, a is local to function foo
} catch(e) {
  console.error(e);  
}
 
function bar() {
  b="test"; // still local to bar
}

try {
  console.out(b);
} catch(e) {
  console.error(e);
}
