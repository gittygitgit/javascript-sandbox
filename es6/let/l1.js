/*
 * Block scoping
 */
"use strict";

{
  
  {
    var a="testing";
    let b="scoped to block";
  }
  console.log(a);
  console.log(b); // fails since b is scoped to inner block
}
