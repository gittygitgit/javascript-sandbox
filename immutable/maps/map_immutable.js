const { Map } = require('immutable')


let m = new Map().set(1, {name: "one"}).set(2, {name:"two"});

let entry1 = m.get(1);
m.set(3, {name: "three"});

console.log(entry1);
console.log(`entry1 equals map entry: ${entry1==m.get(1)}`);
