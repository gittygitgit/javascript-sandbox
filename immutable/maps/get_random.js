const {Map} = require('immutable');

let m = new Map();
m = m.set("foo", 123);
m = m.set("bar", 999);
m = m.set("abc", 111);
m = m.set("def", 333);

console.log(m.count());
console.log(m);
