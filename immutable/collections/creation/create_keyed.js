const { Map, Iterable } = require('immutable');

let keyed = Map({name: "one", id: 1})
console.log(keyed.get("name"));
console.log(keyed.get("id"));
// keyed maps always have string keys


console.log(`Map [isindexed=${Iterable.isIndexed(keyed)}]`)
console.log(`Map [iskeyed=${Iterable.isKeyed(keyed)}]`)

