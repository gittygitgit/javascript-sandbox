
function doit(x) {
  var p = new Promise(function(resolve, reject) {
    if (x > 10) {
      resolve("Success");
    } else {
      reject("Rejected");
    }
  });
  return p;
}

doit(4).then(
  (r) => {console.log(r)}
).catch((e) => {console.error(e)});

  
