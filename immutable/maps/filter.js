const { Map } = require('immutable');

let firms = Map({"ABCD": Map({"name":"ABCD", "last":1, "changed": true}), "CDRG": Map({"name":"CDRG", "last": 2})});


console.log(firms.filter( firm => firm.get("changed") === true ))
console.log(firms.filterNot( firm => firm.get("changed") === true ))


let unchanged = firms.map( f => f.set("changed", false));

console.log(unchanged);  
