const {Map} = require('immutable');

let m = new Map();
m = m.set("foo", 123);
m = m.set("bar", 999);
m = m.set("abc", 111);
m = m.set("def", 333);

console.log(m.count());

let indexed_vals = m.toIndexedSeq();
console.log(indexed_vals);
console.log(indexed_vals.get(0));
console.log(indexed_vals.get(1));


let indexed_keys = m.keySeq();
console.log(indexed_keys);
