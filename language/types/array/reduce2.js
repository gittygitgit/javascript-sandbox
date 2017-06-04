var names=['mike','joe','brian'];

var result = names.reduce(function(prev, name) {
  return prev + "|" + name ;
} );

console.log(result);

