// == compares value, but not type
console.log(undefined == null); //true

// operands are converted before comparison, typically to numeric type
console.log("2" == 2)

// object operands compare internal references based on reference equality
console.log({"one": 1} == {"one": 1});

let x = "one";
let y = 1;
let z = {"one": 1};
let zz = z;
console.log({"one": y} == {"one": y});
console.log({x: y} == {x: y});

console.log(`This resolves to equal since internal references are equal [z == zz] => ${z == zz}`);
console.log(z == zz);


