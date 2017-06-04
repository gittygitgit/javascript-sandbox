
let m = new Map().set(1, { name: "one", complete: false}).set(2, { name: "two", complete: true}).set(3, { name: "three", complete: false});

console.log(m);
for ( let pair of m ) {
  console.log(`key=${pair[0]}, name=${pair[1]["name"]}, complete=${pair[1]["complete"]}`);
  //let complete = pair[1]["complete"];
  
}
m.forEach((v, k) => {
  console.log(v);
  let complete = v["complete"]
  if (!complete) {
    v["complete"]=true;
  } else {
    console.log("already completed");
  }
});

for ( let pair of m ) {
  console.log(`key=${pair[0]}, name=${pair[1]["name"]}, complete=${pair[1]["complete"]}`);
  
}

