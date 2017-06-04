const {fromJS, Map, List, OrderedMap, Iterable} = require('immutable');

// why?
// You want to treat existing javascript structures in an immutable way

// What can be made immutable?
// Objects and Arrays.
// Will not convert stuff like Dates, custome types, etc.

// Objects get converted to Map
let o = {name: "one", val: 1, complete: false};
console.log(`name: ${o["name"]}`);
console.log(`complete: ${o["complete"]}`);

let m = fromJS(o);

console.log(`name: ${m.get("name")}`);
console.log(`complete: ${m.get("complete")}`);

console.log(`Converted object to map [iskeyed: ${Iterable.isKeyed(m)}]`);



