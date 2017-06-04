const { Map } = require('immutable')

// From js object
// Note: keys will end up as strings
let m = Map({ id: 1, name: "one"});
console.log(m.get("id"))
console.log(m.get("name"))

// From tuples
m = Map([[1, "one"], [2, "two"]]);
console.log(m.get(1));
console.log(m.get(2));

