const { List, Iterable } = require('immutable');

let l = List([1,2,3]);

console.log(`isindexed: ${Iterable.isIndexed(l)}`);
console.log(`iskeyed: ${Iterable.isKeyed(l)}`);


