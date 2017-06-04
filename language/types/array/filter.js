names=[1,2,3,4,5,6];

function doFilter(n) {
  return n > 3;
}

console.log(names.filter(doFilter));
