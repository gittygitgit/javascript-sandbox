const { Map, fromJS } = require('immutable');


//let m = Map().set(1, {name: "one", complete: false}).set(2, {name: "two", complete: true});
let m = Map().set(1, fromJS({name: "one", complete: false})).set(2, fromJS({name: "two", complete: true}));


// some short circuits at first execution that returns true;
let result = m.some( v => {
  return v.get("complete");
});

let expected=true;
console.log(`expected=${expected}, actual=${result}`);

// set incomplete
m = m.setIn([2, "complete"], false);
result = m.some( v => {
  return v.get("complete");
});

expected=false;
console.log(`expected=${expected}, actual=${result}`);
