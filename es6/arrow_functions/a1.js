"use strict";

// no args

console.log(( () => 3 )() );

// one arg
console.log([1,2,3].map( n => n * 2))
console.log([1,2,3].map( (n) => n * 2))

// mult args
console.log([1,2, 3, 5].map( (n, index) => n * index ))



