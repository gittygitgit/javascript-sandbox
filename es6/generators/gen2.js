
function* add2(x) {
  var i = x;
  while(true) {
    i=i*2;
    x = yield i;
    if (x) {
      i = x;
    }
  }
}

var gen=add2(2);

console.log(gen.next().value);
console.log(gen.next(20).value);
console.log(gen.next().value);
console.log(gen.next(200).value);

