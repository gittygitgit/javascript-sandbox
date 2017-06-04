let a=[
  {
    index: 2,
    name: "two"
  },
   {
    index: 3,
    name: "three"
  },
   {
    index: 1,
    name: "one"
  },
   {
    index: 4,
    name: "four"
  },
  {
    index: 6,
    name: "six"
  },
  {
    index: 5,
    name: "five"
  }
];
  

let copy = a.slice();
let sortCol;

sorter=((a, b) =>  {
  let val1=a[sortCol];
  let val2=b[sortCol];

  if (val1 < val2) {
    return -1;
  } else if (val1 == val2) {
    return 0;
  } else {
    return 1;
  }
});

sortCol="name";
console.log(copy.sort(sorter));


sortCol="index";
console.log(copy.sort(sorter));
