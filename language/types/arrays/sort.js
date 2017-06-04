let a=[9, 4, 5, 2, 7, 9, 4, 8, 0];

let copy = a.slice();
copy.sort((a, b) =>  {
  if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  }
});

console.log(copy);
