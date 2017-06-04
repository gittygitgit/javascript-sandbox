const { Map, fromJS } = require('immutable');


//let m = Map().set(1, {name: "one", complete: false}).set(2, {name: "two", complete: true});
let m = Map().set(1, fromJS({name: "one", complete: false})).set(2, fromJS({name: "two", complete: true}));


// every short circuits at first execution that returns false;
let result = m.every( v => {
  return v.get("complete");
});

let expected=false;
console.log(`expected=${expected}, actual=${result}`);

// set complete
m = m.setIn([1, "complete"], true);
result = m.every( v => {
  return v.get("complete");
});

expected=true;
console.log(`expected=${expected}, actual=${result}`);
