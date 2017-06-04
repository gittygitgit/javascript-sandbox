const { Map } = require('immutable');

let now = Map({"ABCD": Map({"name":"ABCD", "last":1}), "CDRG": Map({"name":"CDRG", "last": 2})});
let next = Map({"ABCD": Map({"name":"ABCD", "last":2}), "CDRG": Map({"name":"CDRG", "last": 2})});

console.log(Map.isMap(now));
console.log(now.keys());
//now.keys().forEach( k => console.log(k) );

for (let k of now.keys()) {
  console.log(k);
  console.log(now.get(k));

  console.log(next.get(k));
  console.log(now.get(k).equals(next.get(k)));
}


