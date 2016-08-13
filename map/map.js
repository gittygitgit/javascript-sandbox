// With functions
var x = [1, 2, 3];
var results = x.map(function(i) {
  return i * 9;
});

results.forEach(function(r) {
  console.log(r);
});


// with arrow
x = [1, 2, 3];
results = x.map(i => i * 9);

results.forEach(r => {
  console.log(r);
});
