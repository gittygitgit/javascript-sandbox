class Point {
  constructor(x, y) {
      console.log("ctor");
      this.x = x;
      this.y = y;
  }

  get x() {
    console.log("get x");
    return x;
  }
  set x(val) {
    console.log("set x: %s", val);
    this.x = val;
  }

}

var p = new Point(1,2);
console.log(p.x);

