/*
 * Diff between undefined and Null
 */


// null is of type object, which is kind of a JS bug.
var a;
console.log(typeof a);

a="string";
console.log(typeof a);

a=null;
console.log(typeof a);

// undefined and null have different types
console.log(typeof undefined);
console.log(typeof null);


