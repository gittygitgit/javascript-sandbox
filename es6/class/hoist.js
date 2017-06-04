try {
  var p = new Point(1, 2);
} catch (e) {
  // class definitions aren't hoisted
  console.log(e)
}

// functions are hoisted
foo();

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

function foo() {
  console.log("foo");
}
