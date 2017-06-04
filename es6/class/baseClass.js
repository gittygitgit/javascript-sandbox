class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

var p = new Point(1,2);

console.log(p);

console.log(typeof Point);

try {
  Point(1,2);
} catch (e) {
  // class ctor's can only be invoked using new
}
