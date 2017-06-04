let set = new Set();
set.add(1);
set.add("foo");
set.add("bar");
set.add({"test": 123});
console.log(set.size);

console.log(set.has("foo"))
console.log(set.has({"test": 123}));
