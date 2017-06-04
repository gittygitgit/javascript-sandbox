var contacts = [
  {
    name: "mike",
    age: 27,
    email: 'mike@gmail.com'
  },
  {
    name: "joe",
    age: 45
  }
]

function doFilter(p) {
  return p.email;
}

var result = contacts.filter(doFilter);

console.log(result);
