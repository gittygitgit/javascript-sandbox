class Foo {
  // class definitions shouldn't define private fields (anti-pattern)

  /*
   * Class def should only contain the following:
   * - constructor
   * - static methods
   * - prototype methods
   */

  constructor(prop) {
    this.prop = prop;
  }

  static staticMethod() {
    return "classy";
  }

  protoMethod() {
    return "prototypical":
  }
}
