"use strict";

let map = new Map();
map.set("one", 1);
map.set("two", 2);

console.log("size=" + map.size);
console.log(map.get("one"));

console.log("Map has key? " + map.has("one"));

map.delete("one");

console.log("size=" + map.size);
console.log("Map has key? " + map.has("one"));

map.clear();


console.log("size=" + map.size);
