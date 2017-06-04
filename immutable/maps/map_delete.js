
const { Map } = require('immutable');

let m = Map();
let n = m.set(1, "one")
let o = n.set(2, "two");

console.log(m);
console.log(n);
console.log(o);

let p = o.delete(1);
console.log(p);

console.log(type o);
