let m = new Map().set("one", 1).set("two", 2);

// for of
for (let pair of m) {
  console.log(`key=${pair[0]}, val=${pair[1]}`);
}

for (let k of m.keys()) {
  console.log(`key=${k}`);
}
 
for (let v of m.values()) {
  console.log(`value=${v}`);
} 

for ([k, v] of m.entries()) {
  console.log(`key=${k}, val=${v}`);
}
