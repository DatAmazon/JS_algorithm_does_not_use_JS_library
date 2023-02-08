function powAB(a, b) {
  let c = 1;
  if (!checkInteger(a) || !checkInteger(b)){
    return false;
  }
  for(let i = 1; i <= b; i++ )
  {
    c *= a;
  }
  return c;
}

function checkInteger(a) {
  if( a % 1 !== 0 )
  {
    return false;
  }
}

console.assert(powAB('ee', 5) === false, 'Error when entering character in EasyExercise-2');


