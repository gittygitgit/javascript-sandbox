
function* add2(x) {
  var i = x;
  while(true) {
    i=i*2;
    yield i;
  }
}

var gen=add2(2);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

