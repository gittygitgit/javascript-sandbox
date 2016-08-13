/*
 * Constants are block scoped, like let.
 *
 * NOTE: Only applies if in strict mode.
 */
"use strict";
{
  const FOO="foo";
  console.log(FOO);
}

console.log(FOO); // throws error
