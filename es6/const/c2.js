/*
 * const prevents a variable from being reassigned.
 */
try {
  const x="foo";
  const x="bar"; // throws an error
} catch(e) {
  //console.log(e);
} finally {
  console.log("finally");
}

//.. whereas this just fails silently...
x="bar";
console.log(x);


