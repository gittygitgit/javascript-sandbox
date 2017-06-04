
const { Collection, Map, fromJS } = require('immutable');

//let m = Map().set(1, {name: "one", complete: false}).set(2, {name: "two", complete: true});
let m = Map().set(1, fromJS({name: "one", complete: false})).set(2, fromJS({name: "two", complete: true}));
console.log(m);


n=m.map(v => {
  v["complete"]=true;
  return v;
});

for ([k,v] of m) {
  console.log(v);
}
for ([k,v] of n) {
  console.log(v);
}

