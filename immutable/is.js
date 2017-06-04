const { Map, is } = require('immutable');

let m1 = Map().set("MOW1", {name:"MOW1", last:123}).set("CDRG", {name:"CDRG", last:555});
let m2 = Map().set("MOW1", {name:"MOW1", last:123}).set("CDRG", {name:"CDRG", last:555});
let m3 = Map().set(2, "two");
let m4 = Map().set(2, "two");
let m5 = Map({2:"two"});
let m6 = Map({2:"two"});

// equals is the chainable equivilent of is
console.log(is(m3,m4));
console.log(m3.equals(m4));

console.log(is(m5, m6));
console.log(m5.equals(m6));


let map1 = Map({"MOW1":{name:"MOW1", last:123}});
let map2 = Map({"MOW1":{name:"MOW1", last:123}});

// immutable equals / is depends on args being immutables
console.log(map1.equals(map2));

console.log(is(map1, map2));
console.log(is(m1, m2));
console.log(is(m1, m3));

let map3 = Map({"MOW1":Map({name:"MOW1", last:123})});
let map4 = Map({"MOW1":Map({name:"MOW1", last:123})});

console.log(is(map3, map4));
console.log(map3.equals(map4));
