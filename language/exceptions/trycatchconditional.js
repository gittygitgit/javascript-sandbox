try {
  //1 + dsafsafd / 's';
  
  //var b = new Array(-1);

  var num = 234; num.substr(1,1);

} catch (e) {
  if (e instanceof ReferenceError) {
    console.log('ReferenceError');
  } else if (e instanceof RangeError) {
    console.log('RangeError');
  } else if (e instanceof TypeError) {
    console.log('TypeError');
  }
}
