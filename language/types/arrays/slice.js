let a=['one', 'two', 'three', 'four'];

let s=a.slice();
s[0]='hello';

let x=a.slice(2);

let printit=(a, i) => {
  console.log("array-size=%s", a.length);
  if (i != undefined) {
    console.log("element-value [index=%s, val=%s]", i, a[i]);
  }
}

printit(a, 0);
printit(s, 0);
printit(a.slice(2));

// slice doesn't include the last index if specified.
printit(a.slice(1, 3), 0);
