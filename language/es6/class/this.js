class Foo {
  constructor() {
    this.x = 123;
  }

  bar() {
    return this.x;
  }
}

let a = new Foo();
console.log(a.bar());
