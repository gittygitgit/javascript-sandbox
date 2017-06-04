
const { Map } = require('immutable');

let m = Map();
let n = m.set(1, "one")
let o = n.set(2, "two");

console.log(m);
console.log(n);
console.log(o);
