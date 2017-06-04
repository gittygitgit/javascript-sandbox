const {Map} = require('immutable');

var m = Map().set("ABC",{name: "CDRG", foo: 1}).set("DEF",{name: "MOW1", foo:2});

let seq = m.toIndexedSeq();

console.log(seq.get(0));
console.log(seq.get(1));

m = m.mergeDeep(Map().set("ABC", {name: "CDRG", foo: 5}));

seq = m.toIndexedSeq();
console.log(seq.get(0));
console.log(seq.get(1));
