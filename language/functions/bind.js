function foo() {
  return this.x;
}

var bar = {
  x: 100,
  fname: 'mike'
}

var boundFoo = foo.bind(bar);

console.log(boundFoo());
