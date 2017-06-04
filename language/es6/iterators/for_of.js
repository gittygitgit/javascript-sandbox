for ( let x of [1,2,3,4] ) {
  console.log(x);
}

// destructuring pattern
for ( let [k, v] of new Map().set("one", 1).set("two", 2).set("three", 3)) {
  console.log(`key=${k}, val=${v}`);
}

for ( let v of new Set().add("two").add("two").add("three")) {
  console.log(v);
}
